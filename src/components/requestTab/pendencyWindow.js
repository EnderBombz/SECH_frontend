import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import Modal from "../Modals/ModalEdit";
import ModalQuestion from "../Modals/messages/ModalQuestionPendency";
import ModalAlert from "../Modals/messages/ModalAlert";
import { ListContext } from "../../context/ListContext";
import { Context } from "../../context/AuthContext";
import { Post } from "../../functions/CRUD/EquipmentRequest";
import history from "./../../history/history";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    marginBottom:"30px",
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

export default function VirtualizedList() {
  const [loading, setLoading] = useState(true);
  const { list } = useContext(ListContext);
  const { userData, haveRequest, handleHaveRequest } = useContext(Context);
  const classes = useStyles();
  const [currentData, setCurrentData] = useState([]);
  const [window, setWindow] = useState();

  const [open, setOpen] = React.useState(false);
  const [openQuestion, setOpenQuestion] = React.useState(false);

  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertAction, setAlertAction] = React.useState(0);

  const sendRequest = async (data) => {
    if (data.length > 0) {
      const haveRequestStatus = await handleHaveRequest();
      console.log(haveRequestStatus);
      if (haveRequestStatus) {
        handleOpenAlert();
        setAlertMessage(
          "Você já possuí uma solicitação de equipamento pendente"
        );
        //setAlertAction(handleCloseAlert);
      } else {
        await Post(data, userData._id, "equipment");
        handleOpenAlert();
        setAlertMessage("Sucesso ao enviar os dados");
        setAlertAction(1);
      }
    } else {
      handleOpenAlert();
      setAlertMessage(
        "É necessário selecionar no mínimo um item para solicitação"
      );
    }
  };

  const handleChamado = () => {
    history.push("/consultar-status");
  };

  const handleAlertMessage = (msg) => {
    setAlertMessage(msg);
  };

  const handleOpen = async (data) => {
    try {
      let value = data;
      setCurrentData(value);
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setCurrentData(null);
    setOpen(false);
  };

  const handleOpenQuestion = async (data) => {
    try {
      setOpenQuestion(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCloseQuestion = () => {
    setOpenQuestion(false);
  };

  const handleOpenAlert = async (data) => {
    try {
      setOpenAlert(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  async function GetItens() {
    if (list) {
      handleList();
      setLoading(false);
    }
  }

  function handleList() {
    setWindow(
      list.map((item, index) => (
        <ListItem
          button
          onClick={() => {
            handleOpen(item);
          }}
        >
          <ListItemText primary={`${item.equip_name} - ${item.equip_class}`} />        </ListItem>
      ))
    );
  }

  function updatePendency() {
    setLoading(true);
    handleList();
  }

  useEffect(() => {
    GetItens();
  }, [loading]);

  return (
    <>
      <ModalAlert
        open={openAlert}
        handleOpen={handleOpenAlert}
        handleClose={alertAction === 0 ? handleCloseAlert : handleChamado}
        alert={alertMessage}
        action={alertAction === 0 ? handleCloseAlert : handleChamado}
      />

      <ModalQuestion
        handleOpen={handleOpenQuestion}
        handleClose={handleClose}
        handleCloseQuestion={handleCloseQuestion}
        open={openQuestion}
        question={"Deseja realmente remover o item da lista de pendentes?"}
        updatePendency={updatePendency}
        data={currentData}
        handleOpenAlert={handleOpenAlert}
        handleAlertMessage={handleAlertMessage}
      />

      <Modal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        data={currentData}
        handleOpenQuestion={handleOpenQuestion}
      />
      <div className={classes.root}>
        {loading ? <h1>Loading...</h1> : window}
      </div>
      {list.length > 0 ?
        <Button
          onClick={() => {
            sendRequest(list);
          }}
          variant="contained"
          color="primary"
          fullWidth
        >
          Enviar solicitação
        </Button>:<><h5>Nenhum item selecionado</h5></>
      }

    </>
  );
}

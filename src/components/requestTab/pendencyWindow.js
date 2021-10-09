import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText, Button } from "@material-ui/core"
import Modal from "../Modals/ModalEdit"
import ModalQuestion from "../Modals/messages/ModalQuestionPendency"
import ModalAlert from "../Modals/messages/ModalAlert"
import { ListContext } from "../../context/ListContext"
import { Context } from "../../context/AuthContext"
import { Post } from "../../functions/CRUD/EquipmentRequest"
import history from "./../../history/history"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

export default function VirtualizedList() {
  const [loading, setLoading] = useState(true);
  const { list } = useContext(ListContext)
  const { userData } = useContext(Context)
  const classes = useStyles();
  const [currentData, setCurrentData] = useState([]);
  const [window, setWindow] = useState();

  const [open, setOpen] = React.useState(false);
  const [openQuestion, setOpenQuestion] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);


  const sendRequest = async (data) => {

    if (data.length > 0) {
      await Post(data, userData._id);
      history.push("/consultar-status")
    } else {
      alert("É necessário selecionar no mínimo um item para solicitação");
    }
  }

 


  const handleOpen = async (data) => {
    try {

      console.log(data);
      let value = data;
      console.log(value);
      setCurrentData(value);
      console.log(currentData);
      setOpen(true);

    } catch (err) {
      console.log(err)
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
      console.log(err)
    }

  };
  const handleCloseQuestion = () => {
    setOpenQuestion(false);
  };

  const handleOpenAlert = async (data) => {
    try {

      setOpenAlert(true);

    } catch (err) {
      console.log(err)
    }

  };
  const handleCloseAlert = () => {
    setOpenAlert(false);
  };


  async function GetItens() {
    if (list) {
      handleList();
      setLoading(false)
    }

  }

  function handleList() {
    setWindow(
      list.map((item, index) => (
        <ListItem button onClick={() => { handleOpen(item) }}>
          <ListItemText primary={`${item.equip_class} - ${index + 1}`} />
        </ListItem>
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
      <ModalAlert handleOpen={handleOpenAlert} handleClose={handleCloseAlert} alert={"Removido com sucesso!"}/>
      <ModalQuestion handleOpen={handleOpenQuestion} handleClose={handleClose} handleCloseQuestion={handleCloseQuestion} open={openQuestion} question={"Deseja realmente remover o item da lista de pendentes?"} updatePendency={updatePendency} data={currentData}/>
      <Modal handleOpen={handleOpen} handleClose={handleClose} open={open} data={currentData} handleOpenQuestion={handleOpenQuestion}/>
      <div className={classes.root}>{loading ? <h1>Loading...</h1> : window}

      </div>
      <Button
        onClick={() => { sendRequest(list) }}
        variant="contained"
        color="primary"
        fullWidth
      >
        Enviar solicitação
      </Button>
    </>

  );
}

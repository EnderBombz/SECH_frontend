import React, { useState, useContext, useEffect } from "react";
import api from "./../../service/api";
import { Context } from "./../../context/AuthContext";
import {
  TextField,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ModalDetails from "../../components/Modals/ModalSpecsDetails";
import ModalAlert from "../../components/Modals/messages/ModalAlert";
import ModalQuestion from "../../components/Modals/messages/ModalQuestion";
import history from "../../history/history";
import { Post } from "../../functions/CRUD/EquipmentRequest";

import "./../../css/form.css";

const Devolution = () => {
  const { handleHaveRequest } = useContext(Context);

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

  const handleOpenAlert = async (msg) => {
    try {
      setOpenAlert(true);
      setAlertMessage(msg);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCloseAlert = () => {
    setOpenAlert(false);
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

  const { userData } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [equipList, setEquipList] = useState([]);

  const [checked, setChecked] = React.useState([0]);

  const [openDetails, setOpenDetails] = useState(false);
  const [currentItem, setCurrentItem] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const [openQuestion, setOpenQuestion] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [details, setDetails] = React.useState("");

  const handleOpenDetails = async (data) => {
    try {
      let value = data;
      setCurrentItem(value);
      setOpenDetails(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseDetails = () => {
    setCurrentItem(null);
    setOpenDetails(false);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const updateList = async () => {
    const data = await api
      .get(`/users/get/${userData._id}`)
      .then((response) => {
        console.log(response.data);
        return response.data.equipments;
      });
    setEquipList(data);
    if (data) {
      setLoading(false);
    }
  };

  const handleDetails = (msg) => {
    console.log(msg);
    setDetails(msg);
  };

  function sendItens() {
    sendRequest(checked);
    handleOpenAlert();
  }

  useEffect(() => {
    updateList();
  }, [loading]);

  return (
    <>
      <ModalAlert
        open={openAlert}
        handleOpen={handleOpenAlert}
        handleClose={handleChamado}
        alert={"Sucesso ao enviar a solicitação."}
        action={handleChamado}
      />

      <ModalQuestion
        handleOpen={handleOpenQuestion}
        handleClose={handleCloseQuestion}
        open={openQuestion}
        question={
          "Ao confirmar a solicitação, não será possível abrir um novo chamado, até ter algum retorno, Deseja solicitar a manutenção dos equipamentos selecionados?"
        }
        action={sendItens}
      />

      <ModalDetails
        handleOpen={handleOpenDetails}
        handleClose={handleCloseDetails}
        open={openDetails}
        data={currentItem}
      />
      <form>
        <List>
          {equipList.map((value) => {
            const labelId = `checkbox-list-label-${value.equip_name}`;

            return (
              <ListItem
                key={value._id}
                role={undefined}
                dense
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`${value.equip_name} - ${value.equip_class}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => {
                      handleOpenDetails(value);
                    }}
                  >
                    <InfoIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>

        <div className="textBox-margin-footer">
          <TextField
            id="outlined-basic"
            onChange={(e) => {
              handleDetails(e.target.value);
            }}
            label="Motivo"
            multiline
            fullWidth
          />
        </div>
        <div>
          <Button
            onClick={() => {
              handleOpenQuestion();
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            Solicitar
          </Button>
        </div>
      </form>
    </>
  );
};

export default Devolution;

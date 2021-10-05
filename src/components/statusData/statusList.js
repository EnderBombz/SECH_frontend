import React, { useEffect, useState,useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Context} from "./../../context/AuthContext"
import {ListItem,ListItemText} from "@material-ui/core";
import api from "../../service/api";
import Modal from "../Modals/ModalRequest"
import ModalCancel from "../Modals/messages/ModalQuestion"

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
  const {userData} = useContext(Context)
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [openCancel, setOpenCancel] = React.useState(false);

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
  
  const handleOpenCancel = () => {
      setOpenCancel(true);
  };

  const handleCloseCancel = () => {
    setOpenCancel(false);
  };


  const classes = useStyles();

  const [statusList, setStatusList] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [window, setWindow] = useState();

  async function GetItens() {
    const data = await api.get(`/equipment-requests/profile-requests/${userData._id}`).then((response) => {
      return response.data;
    });
    setStatusList(data);
    if (data) {
      setLoading(false);
      handleList();
    }
  }

  function handleList() {
    setWindow(
        statusList.map((item, index) => (
       <ListItem button onClick={() => { handleOpen(item) }} >
          <ListItemText primary={`${item._id} - ${item.request_date}`} />
        </ListItem>
      ))
    );
  }

  useEffect(() => {
    GetItens();
  }, [loading]);

  return (
    <>
      <ModalCancel handleOpen={handleOpenCancel} handleClose={handleCloseCancel} open={openCancel} question="Deseja realmente encerrar o chamado?" />
      <Modal handleOpen={handleOpen} handleClose={handleClose} handleOpenCancel={handleOpenCancel} handleCloseCancel={handleCloseCancel}  open={open} data={currentData} />
      <div className={classes.root}>{loading ? <h1>Loading...</h1> : window}</div>
    </>

  );
}

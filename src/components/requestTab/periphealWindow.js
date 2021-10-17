import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import api from "../../service/api";
import Modal from "../Modals/ModalSpecs"
import ModalAlert from "../Modals/messages/ModalAlert"


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
  const [open, setOpen] = React.useState(false);

  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");


  const handleOpen = async (data) => {
    try { 
      let value = data;
      setCurrentData(value);
      setOpen(true);

    } catch (err) {
      console.log(err)
    }

  };

  const handleClose = () => {
    setCurrentData(null);
    setOpen(false);
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



  function renderRow(props) {
    // const { data, index, style } = props;
    return (
      <></>
    );
  }

  renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired
  };

  const classes = useStyles();

  const [periphealsList, setPeriphealsList] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [window, setWindow] = useState();

  async function GetItens() {
    const data = await api.get("/werehouse/getFreePeripheals").then((response) => {
      return response.data;
    });
    setPeriphealsList(data);
    if (data) {
      setLoading(false);
      handleList();
    }
  }

  function handleList() {
    setWindow(
      periphealsList.map((item, index) => (
        <ListItem button onClick={() => { handleOpen(item) }}>
<ListItemText primary={`${item.equip_name} - ${item.equip_class}`} />        </ListItem>
      ))
    );
  }

  useEffect(() => {
    GetItens();
  }, [loading]);

  return (
    <>
    <ModalAlert
        handleOpen={handleOpenAlert}
        handleClose={handleCloseAlert}
        open={openAlert}
        alert={alertMessage}
        action={handleCloseAlert}
        />
      <Modal 
      handleOpen={handleOpen}
       handleClose={handleClose} 
       open={open} 
       data={currentData}  
       handleOpenAlert={handleOpenAlert}
       setAlertMessage={setAlertMessage}
       />
      <div className={classes.root}>{loading ? <h1>Loading...</h1> : window}</div>
    </>

  );
}

import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {ListItem, ListItemText ,Button} from "@material-ui/core"
import Modal from "../Modals/ModalEdit"
import {Context} from "../../context/ListContext"
import {Post} from "../../functions/CRUD/EquipmentRequest"
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
  const [open, setOpen] = React.useState(false);
  const {list} = useContext(Context) 
  const classes = useStyles();
  const [currentData, setCurrentData] = useState([]);
  const [window, setWindow] = useState();

  const sendRequest = async (data) =>{
    await Post(data);
    history.push("/consultar-status") 
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


  async function GetItens() {
    if(list){
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

  useEffect(() => {
    GetItens();
  }, [loading]);

  return (
    <>
      <Modal handleOpen={handleOpen} handleClose={handleClose} open={open} data={currentData}/>
      <div className={classes.root}>{loading ? <h1>Loading...</h1> : window}
    
      </div>
        <Button
                  onClick={()=>{sendRequest(list)}}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Enviar solicitação
                  </Button>
    </>

  );
}

import React,{ useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import "./../../css/modal.css";
import {ListContext} from "../../context/ListContext"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();

  const {pushList,list} = useContext(ListContext);

  function pushPendencyList(){

    let i=0;
    let item = false;
    for(i=0;i<list.length;i++){
        if(list[i].equip_class === props.data.equip_class && item===false){
          item=true;
        }
    }

    if(item){
      props.handleOpenAlert();
      props.setAlertMessage(`já existe um ${props.data.equip_class} na lista`)
      props.handleClose();
    }else{
      pushList(props.data);
      props.handleClose();
    }
    
    
  }


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            {props.data ? (
              <>
              <h1>
                {props.data.equip_name}
              </h1>
                <h3>
                  {props.data.equip_type} ID:{props.data._id}
                </h3>
                <h4>Especificações</h4>
                <p>{props.data.equip_spec}</p>
                <h4>Detalhes</h4>
                <p> {props.data.equip_details}</p>
                <div>
                  <Button
                  onClick={()=>{pushPendencyList()}}
                    variant="contained"
                    color="primary"
                    style={{
                      textAlign: "left",
                      margin: "10px",
                      padding: "10px 30px 10px 30px",
                      fontSize: "15px"
                    }}
                  >
                    Adicionar
                  </Button>
                  <Button
                    onClick={() => {
                      props.handleClose();
                    }}
                    variant="contained"
                    color="secondary"
                    style={{
                      textAlign: "right",
                      margin: "10px",
                      padding: "10px 30px 10px 30px"
                    }}
                  >
                    Cancelar
                  </Button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

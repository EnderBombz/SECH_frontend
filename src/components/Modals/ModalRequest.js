import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./../../css/modal.css";
import {Button} from "@material-ui/core"

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
                        {props.data != undefined? (
                            <>
                                <h3>
                                    Chamado: {props.data._id}
                                </h3>
                           <div className="flex-itens"> 

                               {props.data.equip_list?
                               <>
                               {props.data.equip_list.map((item, index) => (
                                        <Button  
                                        variant="contained"
                                        color="primary"
                                        >{item.equip_name}
                                        </Button>  
                                       
                                    )
                                )} 
                                </>
                                :<></>}
                                    </div>
                                   
                               


                                <div>

                                    <Button
                                        onClick={() => { props.handleOpenCancel() }}
                                        variant="contained"
                                        color="secondary"
                                       fullWidth
                                    >
                                        Cancelar Chamado
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

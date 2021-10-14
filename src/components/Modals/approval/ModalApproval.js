import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./../../../css/modal.css";
import { Button } from "@material-ui/core";

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
            {props.data != undefined ? (
              <>
                <h3>Chamado: {props.data._id}</h3>
                <h4>Requisitante: {props.data.user_id}</h4>
                <div>
                  <div className={props.data.request_status}>
                    <h4>Status: {props.data.request_status}</h4>
                  </div>
                </div>

                <div className="flex-itens">
                  {props.data.equip_list ? (
                    <>
                      {props.data.equip_list.map((item, index) => (
                        <Button
                          onClick={() => {
                            props.handleOpenDetails(item);
                          }}
                          variant="contained"
                          color="primary"
                        >
                          {item.equip_name}
                        </Button>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </div>

                {props.data.request_status === "approved" ? (
                  <>
                    <div className="padding-button">
                      <Button
                        onClick={() => {
                          props.handleOpenQuestion(
                            "Após finalizar o chamado, ele será apagado após o período de 1 mês, deseja continuar?",
                            3
                          );
                        }}
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Finalizar
                      </Button>
                    </div>
                    <div className="padding-button">
                      <Button
                        onClick={() => {
                          props.handleOpenQuestion(
                            "Após cancelar, todos os itens relacionados voltarão ao normal e o chamado será apagado, deseja continuar?",
                            3
                          );
                        }}
                        variant="contained"
                        color="secondary"
                        fullWidth
                      >
                        Cancelar chamado
                      </Button>
                    </div>
                  </>
                ) : props.data.request_status === "pending" ? (
                  <>
                    <div className="padding-button">
                      <Button
                        onClick={() => {
                          props.handleOpenQuestion(
                            "Deseja aprovar o chamado solicitado?",
                            1
                          );
                        }}
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Aprovar
                      </Button>
                    </div>
                    <div className="padding-button">
                      <Button
                        onClick={() => {
                          props.handleOpenQuestion(
                            "Realmente deseja recusar o chamado solicitado?",
                            2
                          );
                        }}
                        variant="contained"
                        color="secondary"
                        fullWidth
                      >
                        Recusar
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => {
                        props.handleOpenQuestion(
                          "Após cancelar, todos os itens relacionados voltarão ao normal e o chamado será apagado, deseja continuar?",
                          3
                        );
                      }}
                      variant="contained"
                      color="secondary"
                      fullWidth
                    >
                      Apagar chamado
                    </Button>
                  </>
                )}
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

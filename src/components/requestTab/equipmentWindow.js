import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";
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
    

    const classes = useStyles();

    const [computerList, setComputerList] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [window, setWindow] = useState();
    

    async function GetItens() {
        const data = await api.get("/werehouse/getFreeComputers").then((response) => {
            return response.data;
        });
        setComputerList(data);
        if (data) {
            setLoading(false);
            handleList();
        }
    }

    function handleList() {
        setWindow(
            computerList.map((item, index) => (
                <ListItem button onClick={
                    () => { handleOpen(item) }} >
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
        <ModalAlert
        handleOpen={handleOpenAlert}
        handleClose={handleCloseAlert}
        open={openAlert}
        alert={alertMessage}
        action={handleCloseAlert}
        />
            <Modal handleOpen={handleOpen}
                handleClose={handleClose}
                handleOpenAlert={handleOpenAlert}
                setAlertMessage={setAlertMessage}
                open={open}
                data={currentData}
            />
            <div className={classes.root}> {loading ? <h1> Loading... </h1> : window}</div>

        </>

    );
}
import React, { useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";
import api from "../../service/api";
import Modal from "../Modals/approval/ModalApproval"
import ModalDetails from "../Modals/ModalSpecsDetails"
import ModalQuestion from "../Modals/messages/ModalQuestion"

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
    const [openDetails, setOpenDetails] = useState(false)
    const [openQuestion, setOpenQuestion] = useState(false);
    const [questionMessage, setQuestionMessage] = useState("")
    const [methodOption, setMethodOption] = useState(0);

    const classes = useStyles();

    const [approvalList, setApprovalList] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [currentItem, setCurrentItem] = useState([]);
    const [window, setWindow] = useState();



    const updateStatus = async () => {
        
        handleCloseQuestion();
        handleClose();
        setLoading(true)
        const list = currentData.equip_list;
        const list_json = JSON.stringify(list)

        await api.put(`/equipment-requests/put/${currentData._id}`, {
            equip_list: list_json,
            request_date: currentData.request_date,
            user_id: currentData.user_id,
            request_status: "approved",
            request_type: currentData.request_type,
        })
        handleList();
      
    }

    const cancelStatus = async () => {

        let list = currentData.equip_list
        const equip_list = await JSON.stringify(list)
        await api.put(`/werehouse/put-free/${currentData._id}`,{equip_list:equip_list});
        await api.delete(`/equipment-requests/delete/${currentData._id}`);
    
        setLoading(true);
        handleList();
        handleCloseQuestion();
        handleClose();
    }
    const cancelFinishedStatus = async () => {

        let list = currentData.equip_list
        const equip_list = await JSON.stringify(list)
        await api.delete(`/equipment-requests/delete/${currentData._id}`);
    
        setLoading(true);
        handleList();
        handleCloseQuestion();
        handleClose();
    }

    const finishStatus = async () => {
        handleCloseQuestion();
        handleClose();
        setLoading(true)
        const list = currentData.equip_list;
        const list_json = JSON.stringify(list)
        await api.put(`/equipment-requests/put-finish/${currentData._id}`, {
            equip_list: list_json,
            request_date: currentData.request_date,
            user_id: currentData.user_id,
            request_status: "finish",
            request_type: currentData.request_type
        })
        handleList();
    }

    const handleOpenQuestion = async (msg, method) => {
        try {
            setQuestionMessage(msg)
            setOpenQuestion(true);
            if (method === 1) {
                setMethodOption(1)
            } else if (method === 2) {
                setMethodOption(2)
            } else if (method === 3) {
                setMethodOption(3)
            } else {
                setMethodOption(0)
            }
        } catch (err) {
            console.log(err)
        }

    };

    const handleCloseQuestion = () => {
        setOpenQuestion(false);
    };

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

    const handleOpenDetails = async (data) => {
        try {
            let value = data;
            setCurrentItem(value);
            setOpenDetails(true);
        } catch (err) {
            console.log(err)
        }

    };

    const handleCloseDetails = () => {
        setCurrentItem(null);
        setOpenDetails(false);
    };


    async function GetItens() {
        const data = await api.get("/equipment-requests/equipment/approvals").then((response) => {
            return response.data;
        });
        setApprovalList(data);
        if (data) {
            setLoading(false);
            handleList();
        }
    }

    async function handleList() {
        setWindow(
            await approvalList.map((item, index) => (
                <ListItem button onClick={
                    () => { handleOpen(item) }} >
                    <ListItemText primary={`${item._id} - ${item.request_date} - ${item.request_status}`} />
                </ListItem>
            ))
        );
    }

    useEffect(() => {
        GetItens();
    }, [loading]);

    return (
        <>
            <ModalDetails
                handleOpen={handleOpenDetails}
                handleClose={handleCloseDetails}
                open={openDetails}
                data={currentItem}
            />
            <ModalQuestion
                handleOpen={handleOpenQuestion}
                handleClose={handleCloseQuestion}
                open={openQuestion}
                action={methodOption===1?
                    updateStatus
                    :
                    methodOption===2?
                    cancelStatus
                    :
                    methodOption===3?
                    finishStatus
                    :methodOption===4?
                    cancelFinishedStatus
                    :
                    <></>
                }
                question={questionMessage}
            />
            <Modal handleOpen={handleOpen}
                handleClose={handleClose}
                handleOpenDetails={handleOpenDetails}
                handleOpenQuestion={handleOpenQuestion}
                open={open}
                data={currentData}
            />

            <div className={classes.root}> {loading ? <h1> Loading... </h1> : window}</div>

        </>

    );
}
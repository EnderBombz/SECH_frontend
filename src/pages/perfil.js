import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Context } from "../context/AuthContext";
import { Button } from "@material-ui/core"
import api from "./../service/api"
import ModalDetails from "../components/Modals/ModalSpecsDetails"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';
import "../css/status.css";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  primary: {
    textAlign: 'center',
    boxShadow: "3px 3px 3px rgba(0, 0, 0, .3)",
    marginBottom:"30px",
    backgroundColor: "#009688",
    borderRadius:"5px"
  },
}));



function Status() {
  
  const classes = useStyles();

  const { userData, handleLogout } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [equipList, setEquipList] = useState([]);
  const [windowList,setWindowList] = useState([]);

  const [openDetails, setOpenDetails] = useState(false)
  const [currentItem, setCurrentItem] = useState([]);

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

  const updateList = async () => {

    const data = await api.get(`/users/get/${userData._id}`).then((response) => {
      console.log(response.data)
      return response.data.equipments
    })
    setEquipList(data);
    if (data) {
      setLoading(false);
      handleList();
    }
  }
  async function handleList() {
    setWindowList(
        await equipList.map(item => (<> 
      <ListItem button className={classes.root} onClick={() => { handleOpenDetails(item)}}>
        <ListItemText inset primary={item.equip_name} />
      </ListItem>
          </>
          ))
    );
}

  useEffect(() => {
    updateList()
  }, [loading])

  return (
    <>
     <ModalDetails
                handleOpen={handleOpenDetails}
                handleClose={handleCloseDetails}
                open={openDetails}
                data={currentItem}
            />
      <NavBar />

      <div className="box-content">
        <div className="content">
          <h1>{userData.username}</h1>
          <div className="textAlign-left">
            <h4>{userData.email}</h4>
            <h4>{userData.cpf}</h4>
            <h4>{userData.userlevel}</h4>
            <h4>{userData.department}</h4>
          </div>
          <h2>
            Equipamentos em posse

          </h2>
          <div>
             <List component="nav" aria-label="contacts" className={classes.primary}>
            {loading ? <h1> Loading... </h1> : windowList}
          </List>
          </div>
         

          <Button
            onClick={() => {
              handleLogout();
            }}
            variant="contained"
            color="secondary"
            fullWidth
          >
            Sair
          </Button>
        </div>
      </div>
    </>
  );
}

export default Status;

import React, { useState, useContext, useEffect } from "react";
import api from "./../../service/api"
import { Context } from "./../../context/AuthContext"
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
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ModalDetails from "../../components/Modals/ModalSpecsDetails"

import "./../../css/form.css";

const Maintance = () => {

  const { userData} = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [equipList, setEquipList] = useState([]);

  const [checked, setChecked] = React.useState([0]);

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

    const data = await api.get(`/users/get/${userData._id}`).then((response) => {
      console.log(response.data)
      return response.data.equipments
    })
    setEquipList(data);
    if (data) {
      setLoading(false);
    }
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
    <form>
      <List>
        {equipList.map((value) => {
    
          const labelId = `checkbox-list-label-${value.equip_name}`;

          return (
            <ListItem key={value._id} role={undefined} dense button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.equip_name} - ${value.equip_class}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments" onClick={()=>{handleOpenDetails(value)}}>
                  <InfoIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>

      <div className="textBox-margin-footer">
        <TextField id="outlined-basic" label="Motivo" multiline fullWidth />
      </div>
      <div>
        <Button
          onClick={() => {
            console.log(checked);
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

export default Maintance;

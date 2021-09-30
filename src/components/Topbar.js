import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Menu, MenuItem } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import history from "../history/history"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
  title: {
    flexGrow: 1,
  },
}));

const handleMain = () => {
  history.push("/dashboard")
}


export default function ButtonAppBar(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.root}>
      <AppBar className={classes.topOut}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={() => { props.ShowSideBar() }} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <div style={{ padding: 3 }}>
              <Button
                variant="contained"
                style={{ borderRadius: 50, fontWeight: "bolder" }}
                color="secondary"
                size="large"
                className={classes.button}
                startIcon={<Avatar style={{ height: 20, width: 20, padding: 0, margin: 0 }} src={"https://i.imgur.com/gLOpjyV.png"} />}
                onClick={() => { handleMain() }}
              >
                Gráfico S.E.C.H
              </Button>
            </div>
          </Typography>


        </Toolbar>
      </AppBar>
    </div>
  );
}

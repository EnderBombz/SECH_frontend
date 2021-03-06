import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import EquipmentRequests from "./../requestAprovals/equipmentWindow";
import MaintanceRequests from "./../requestAprovals/maintanceWindow";
import DevolutionRequests from "./../requestAprovals/devolutionWindow";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: 20,
    borderRadius: 10,
    boxShadow: "1px 2px 3px rgba(0,0,0,.3)"
  }
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          aria-label="wrapped label tabs example"
        >
          <Tab value="one" label="Equip." wrapped {...a11yProps("one")} />
          <Tab value="two" label="Manut." {...a11yProps("two")} />
          <Tab value="three" label="Devol." {...a11yProps("three")} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        <EquipmentRequests />
      </TabPanel>
      <TabPanel value={value} index="two">
       <MaintanceRequests />
      </TabPanel>
      <TabPanel value={value} index="three">
      <DevolutionRequests />
      </TabPanel>
    </div>
  );
}

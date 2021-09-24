import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import Routes from "./routes/routes";
import history from "./history/history";

import { AuthProvider } from "./context/AuthContext";

const theme = createTheme({
  palette: {
      primary: {
          main: "#009688",
      },
      secondary:{
        main:"#007166"
      },
      
     
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme} >
         <Router history={history}>
        <Routes />
      </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

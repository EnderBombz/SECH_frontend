import React, { useContext} from "react";
import { Link } from "react-router-dom";
import history from './../history/history';

import { 
  InputAdornment,
  Button, 
  TextField, 
} from "@material-ui/core";

import {
  AccountCircle,
  Lock,
} from '@material-ui/icons';

import "../css/login.css";
import { Context } from "./../context/AuthContext";

export default function Login(props) {
  const { authenticated, handleLogin } = useContext(Context);


  console.debug("Login", authenticated);
  return (
    <>
      <div className="background-color">
        <div className="flex-box">
          <div className="content-box">
            <div className="box">
            <h1 className="box-tittle">S.E.C.H</h1>
              <form>
                <div className="box-text">
                  <TextField
                    type="email"
                    label="Email"
                    color={props.primary}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="box-text">
                <TextField
                 type="password"
                 label="Senha"
                 color={props.primary}
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">
                       <Lock/>
                     </InputAdornment>
                   ),
                 }}
               />
                </div>
                <div className="box-button">

                  <Button onClick={handleLogin} variant="contained" fullWidth color="primary">Entrar</Button>
                  
                  <Link to="/recuperar-senha"><h6>Esqueceu a senha?</h6></Link>
                </div>
                <div className="box-top-border">
                <Button onClick={()=>{history.push("/cadastro")}} variant="contained" color="secondary">Criar nova conta</Button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

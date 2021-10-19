import React, { useContext, useState } from "react";
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
  const { authenticated, handleLogin,response } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleEmail = (email) => {
    setEmail(email)
  }

  const handlePassword = (password) => {
    setPassword(password)
  }

  console.debug("Login", authenticated);
  return (
    <>
      <div className="background-color">
        <div className="flex-box">
          <div className="content-box">
            <div className="box">
              <h1 className="box-tittle">S.E.C.H</h1>
              {response != "" ?
                <>
                  <div className="return-message">
                    {response}
                  </div>
                </>
                :
                <>
                </>}
              <form>
                <div className="box-text">
                  <TextField
                    type="email"
                    label="Email"
                    onChange={(e) => { handleEmail(e.target.value) }}
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
                    onChange={(e) => { handlePassword(e.target.value) }}
                    label="Senha"
                    color={props.primary}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="box-button">

                  <Button onClick={() => { 
                    handleLogin(email, password);

                    }} variant="contained" fullWidth color="primary">Entrar</Button>

                  <Link to="/recuperar-senha"><h6>Esqueceu a senha?</h6></Link>
                </div>
                <div className="box-top-border">
                  <Button onClick={() => { history.push("/cadastro") }} variant="contained" color="secondary">Criar nova conta</Button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

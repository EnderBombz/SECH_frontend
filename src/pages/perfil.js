import React,{useContext} from 'react'
import NavBar from '../components/NavBar'
import {Context} from "../context/AuthContext"
import {Button} from "@material-ui/core"

import "../css/status.css"

function Status() {

    const {userData,handleLogout} = useContext(Context)
    return (
        <>

            <NavBar />

            <div className="box-content">
                <div className="content">
                <h1>Perfil</h1>
                <Button
                  onClick={()=>{handleLogout()}}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Sair
                  </Button>
                </div>
            </div>
        </>
    )
}

export default Status
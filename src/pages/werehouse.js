import React from 'react'
import NavBar from '../components/NavBar'
import RequestTab from "../components/werehouse/requestTab"

import "../css/textAlign.css"

function Status() {


    return (
        <>

            <NavBar />

            <div className="box-content">
                <div className="content">
                    <h1 className="textAlign-left">Solicitações</h1>
                    <p className="textAlign-left">Com o acesso técnico, é possível liberar ou negar as solicitações dos usuários</p>
                    <RequestTab />
                </div>
            </div>
        </>
    )
}

export default Status
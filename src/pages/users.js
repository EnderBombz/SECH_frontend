import React from 'react'
import NavBar from '../components/NavBar'
import RequestTab from "../components/users/requestTab"

import "../css/textAlign.css"

function Status() {


    return (
        <>

            <NavBar />

            <div className="box-content">
                <div className="content">
                    <h1 className="textAlign-left">Usuários</h1>
                    <p className="textAlign-left">Nesta área, é possivel gerenciar o acesso</p>
                    <RequestTab />
                </div>
            </div>
        </>
    )
}

export default Status
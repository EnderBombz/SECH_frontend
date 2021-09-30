import React from 'react'
import NavBar from '../components/NavBar'
import RequestTab from "../components/requestStatus/requestTab"

import "../css/textAlign.css"

function status() {

    return (
        <>

            <NavBar />

            <div className="box-content">
                <div className="content">
                    <h1 className="textAlign-left">Status de chamados</h1>
                    <p className="textAlign-left">Acompanhe o andamento dos chamados que forma abertos.</p>
                    <RequestTab/>
                </div>
            </div>
        </>
    )
}

export default status
import React from 'react'
import NavBar from '../components/NavBar'
import GraphTab from "../components/GraphTab"

import "../css/dashboard.css"

function dashboard() {

    return (
        <>

            <NavBar />

            <div className="box-content">
                <div className="content">

                    <GraphTab />

                    
                </div>
            </div>
        </>
    )
}

export default dashboard
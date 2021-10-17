import React from 'react'
import NavBar from '../components/NavBar'
import GraphTab from "../components/GraphTab"
import { DashboardProvider } from '../context/DashboardContext'

import "../css/dashboard.css"

export default function dashboard() {

    return (
        <>

            <NavBar />
            <DashboardProvider>
                <div className="box-content">
                    <div className="content">

                        <GraphTab />
                    <div className="spacing">

                 </div> 
                    </div>     
                
                </div>
            </DashboardProvider>

        </>
    )
}

import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { DashboardContext } from "./../context/DashboardContext"
import "../css/GraphTab.css"
import {FiberManualRecord} from '@material-ui/icons';

import PeripheralsChart from "./../components/charts/peripherals"
import ComputersChart from "./../components/charts/computers"

export default function CenteredTabs() {

    const [tab, setTab] = React.useState(0);
    const { maintance, setMaintance, reserved, setReserved, free, setFree } = useContext(DashboardContext)

    const handleChange = (event, newTab) => {
        setTab(newTab);
    };

    return (
        <>
            <Paper style={{ borderRadius: 50 }} >
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                >
                    <Tab label="Comput." />
                    <Tab label="Perif." />

                </Tabs>

            </Paper>



            <div className="graphAlign">
                <div className="chartSize">
                    {tab === 0 ? <><ComputersChart /></>:<><PeripheralsChart /></>}
                    <div>{tab===0?<> <div className="align-dots">
                        <FiberManualRecord width={24} height={24}  style={{width:13,height:13,marginRight:5,color: 'rgb(255, 205, 86)'}}/>
                        <label>Reservadas: {reserved}</label>
                        </div>
                        <p><FiberManualRecord  style={{width:13,height:13,marginRight:5,color:"rgb(255, 99, 132)"}}/>Estoque: {free}</p>
                        <p><FiberManualRecord  style={{width:13,height:13,marginRight:5,color: 'rgb(54, 162, 235)'}}/>Manutenção: {maintance}</p></>
                        :
                        <> <div className="align-dots">
                        <FiberManualRecord width={24} height={24}  style={{width:13,height:13,marginRight:5,color: '#FF6584'}}/>
                        <label>Reservadas: {reserved}</label>
                        </div>
                        <p><FiberManualRecord  style={{width:13,height:13,marginRight:5,color:'#3F3D56'}}/>Estoque: {free}</p>
                        <p><FiberManualRecord  style={{width:13,height:13,marginRight:5,color: '#AF4BFE'}}/>Manutenção: {maintance}</p></>}
                       
                    </div>
                </div>

            </div>


        </>
    );
}

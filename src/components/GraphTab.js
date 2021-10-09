import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import "../css/GraphTab.css"

import PeripheralsChart from "./../components/charts/peripherals"
import ComputersChart from "./../components/charts/computers"

export default function CenteredTabs() {

    const [tab, setTab] = React.useState(0);
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
                    {tab === 0 ? <ComputersChart /> : <PeripheralsChart />}

                </div>
            </div>


        </>
    );
}

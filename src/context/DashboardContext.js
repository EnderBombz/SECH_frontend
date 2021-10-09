import React, { createContext} from 'react';

import useDashboard from './../hooks/useDashboard'

const DashboardContext = createContext();

function DashboardProvider({ children }) {

    const  {
        maintance, setMaintance, reserved, setReserved, free, setFree
    } = useDashboard()

    return ( 
        <DashboardContext.Provider value={{maintance, setMaintance, reserved, setReserved, free, setFree}}> 
            { children } 
        </DashboardContext.Provider>
    )


}

export {DashboardContext, DashboardProvider};
import React, { createContext} from 'react';

import useAuth from './../hooks/useAuth'

const Context = createContext();

function AuthProvider({ children }) {

    const  { 
        authenticated, loading, handleLogin,handleLogout,userData,haveRequest,handleHaveRequest,response
        } = useAuth()

    return ( 
        <Context.Provider value={{loading,authenticated, handleLogin, handleLogout,userData,haveRequest,handleHaveRequest,response}}> 
            { children } 
        </Context.Provider>
    )


}

export {Context, AuthProvider};
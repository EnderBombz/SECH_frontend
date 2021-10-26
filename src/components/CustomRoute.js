import React,{useContext} from 'react'
import { Route,Redirect } from 'react-router-dom';
import {Context} from '../context/AuthContext'

export default function CustomRoute({isPrivate,isTechnician, ...rest}){
    const {authenticated,loading,userData} = useContext(Context);

    if(loading){
        return <h1>Loading ...</h1>;
    }

    if(isPrivate && !authenticated){
        return <Redirect to="/login"/>
    }

    if(isTechnician && userData.userlevel!="tecnico"){
        return <Redirect to="/dashboard"/>
    }


    return <Route {...rest}/>;
} 
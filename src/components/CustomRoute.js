import React,{useContext} from 'react'
import { Route,Redirect } from 'react-router-dom';
import {Context} from '../context/AuthContext'

export default function CustomRoute({isPrivate, ...rest}){
    const {authenticated,loading} = useContext(Context);

    if(loading){
        return <h1>Loading ...</h1>;
    }

    if(isPrivate && !authenticated){
        return <Redirect to="/login"/>
    }


    return <Route {...rest}/>;
}
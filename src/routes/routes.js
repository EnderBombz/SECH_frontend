import React from 'react'
import {Switch} from 'react-router-dom'

import CustomRoute from '../components/CustomRoute' 

import Login from '../pages/login'
import Users from '../pages/users'
import Dashboard from '../pages/dashboard'
import Cadastros from '../pages/cadastros'

import Status from '../pages/status'
import Tecnico from '../pages/tecnico'
import Chamado from '../pages/chamado'


export default function Routes(){

    
    return(
        <Switch>
            <CustomRoute exact path="/login" component={Login}/>
            <CustomRoute isPrivate exact path="/users" component={Users}/>
            <CustomRoute exact path="/dashboard" component={Dashboard}/>
            <CustomRoute exact path="/chamado" component={Chamado}/>
            <CustomRoute exact path="/consultar-status" component={Status}/>
            <CustomRoute exact path="/area-tecnico" component={Tecnico}/>


            <CustomRoute exact path="/cadastros" component={Cadastros}/>
        </Switch>
    )
}
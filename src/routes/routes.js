import React from 'react'
import {Switch} from 'react-router-dom'

import CustomRoute from '../components/CustomRoute' 

import Login from '../pages/login'
//mport Users from '../pages/users'
import Dashboard from '../pages/dashboard'
import Cadastros from '../pages/cadastros'

import Status from '../pages/status'
import Tecnico from '../pages/tecnico'
import Chamado from '../pages/chamado'
import Perfil from '../pages/perfil'


export default function Routes(){

    
    return(
        <Switch>
            <CustomRoute exact path="/login" component={Login}/>
            <CustomRoute exact path="/perfil" component={Perfil}/>
            <CustomRoute isPrivate exact path="/dashboard" component={Dashboard}/>
            <CustomRoute isPrivate exact path="/chamado" component={Chamado}/>
            <CustomRoute isPrivate exact path="/consultar-status" component={Status}/>
            <CustomRoute isPrivate exact path="/area-tecnico" component={Tecnico}/>


            <CustomRoute exact path="/cadastros" component={Cadastros}/>
        </Switch>
    )
}
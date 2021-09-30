import React from 'react'
import {Switch} from 'react-router-dom'
import '../css/cadastros.css'
import "../css/dashboard.css"

import CustomRoute from '../components/CustomRoute' 

import Login from '../pages/login'
//mport Users from '../pages/users'
import Dashboard from '../pages/dashboard'
import Cadastros from '../pages/cadastros'

import Status from '../pages/status'
import Tecnico from '../pages/tecnico'
import Chamado from '../pages/chamado'
import Perfil from '../pages/perfil'

import Aprovacoes from "../pages/approvals"
import Estoque from "../pages/werehouse"
import Usuarios from "../pages/users"



export default function Routes(){

    
    return(
        <Switch>
            <CustomRoute exact path="/login" component={Login}/>
            <CustomRoute exact path="/perfil" component={Perfil}/>
            <CustomRoute isPrivate exact path="/dashboard" component={Dashboard}/>
            <CustomRoute isPrivate exact path="/chamado" component={Chamado}/>
            <CustomRoute isPrivate exact path="/consultar-status" component={Status}/>
            <CustomRoute isPrivate exact path="/area-tecnico" component={Tecnico}/>
            <CustomRoute isPrivate exact path="/aprovacoes" component={Aprovacoes}/>
            <CustomRoute isPrivate exact path="/estoque" component={Estoque}/>
            <CustomRoute isPrivate exact path="/usuarios" component={Usuarios}/>
        </Switch>
    )
}
import React from 'react'
import * as MaterialUI from '@material-ui/icons'




export const SideBarData = [{
        title: 'Perfil data do usuario',
        path: '/perfil',
        icon: < MaterialUI.AccountCircle style = {
            { marginRight: 10 } }
        />,
        className: 'nav-text',
        access:1
    },
    {
        title: 'Abrir Chamado',
        path: '/chamado',
        icon: < MaterialUI.Add style = {
            { marginRight: 10 } }
        />,
        className: 'nav-text',
        access:1
    },
    {
        title: 'Consultar Status',
        path: '/consultar-status',
        icon: < MaterialUI.Book style = {
            { marginRight: 10 } }
        />,
        className: 'nav-text',
        access:1
    },
    {
        title: 'Area do técnico',
        path: '/area-tecnico',
        icon: < MaterialUI.Settings style = {
            { marginTop: 0 } }
        />,
        className: 'nav-text',
        access:2
    },

]
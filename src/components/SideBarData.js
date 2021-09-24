import React from 'react'
import * as MaterialUI from '@material-ui/icons'

export const SideBarData = [
    {
        title:'Abrir Chamado',
        path:'/chamado',
        icon:<MaterialUI.Add style={{marginRight:10}}/>,
        className:'nav-text'
    },
    {
        title:'Consultar Status',
        path:'/consultar-status',
        icon:<MaterialUI.Book style={{marginRight:10}}/>,
        className:'nav-text'
    },
    {
        title:'Area do técnico',
        path:'/area-tecnico',
        icon:<MaterialUI.Settings style={{marginTop:0}}/>,
        className:'nav-text'
    },
    {
        title:'Cadastros (Temporário)',
        path:'/cadastros',
        icon:<MaterialUI.Settings style={{marginTop:0}}/>,
        className:'nav-text'
    },
    
]
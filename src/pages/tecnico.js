import React from 'react'
import NavBar from '../components/NavBar'
import {Button} from "@material-ui/core"
import history from "../history/history" 

import "../css/textAlign.css"

function tecnico() {

    function handleSolicitacao(){
        history.push("/aprovacoes")
    }
    function handleEstoque(){
        history.push("/estoque")
    }
    function handleUsuarios(){
        history.push("/usuarios")
    }

    return (
        <>

            <NavBar />

            <div className="box-content">
                <div className="content">
                    <h1 className="textAlign-left">Área do técnico</h1>
                    <p className="textAlign-left">Menu que possíbilita o gerenciamento das informações utilizadas pelo sistema.</p>
                    <div className="button">
                        <Button
                       
                        onClick={() => {handleSolicitacao()}}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Solicitações
                    </Button>
                    </div>
                    <div className="button"> <Button
                    style={{marginBotton:10}}
                        onClick={() => {handleEstoque()}}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Estoque
                    </Button></div>
                    <div className="button"> <Button
                   style={{marginBotton:10}}
                        onClick={() => { handleUsuarios()}}
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Usuário
                    </Button></div>
                   

                </div>
            </div>
        </>
    )
}

export default tecnico
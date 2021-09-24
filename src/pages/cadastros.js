import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { ModalCadastroEquip } from '../components/ModalCadastroEquip'
import api from '../service/api'

import '../css/cadastros.css'
import "../css/dashboard.css"

function Cadastros(props) {

    const [equipamentos, setEquipamentos] = useState([])
    const [ShowModalCadastro, setShowModalCadastro] = useState(false)

    useEffect(() => {
        (
            async () => {
                const { data } = await api.get("/estoque/getAll")
                console.log(data)
                setEquipamentos(data)
            })();
    }, []);

    return (
        <>
            <NavBar />
            <ModalCadastroEquip ModalCadastroVisible={ShowModalCadastro} setModalCadastroVisible={setShowModalCadastro}/>
            <div className="box-content">
                <div className="content">
                    <div className="minichart">
                        {equipamentos.length>0 ?
                            <div className="chartSize">
                                <button>asda</button>
                            </div>
                            :
                            <div className="chartSize">
                                <p>Desculpe mas parece que nenhum equipamento está cadastrado</p>
                                <button onClick={()=>setShowModalCadastro(!ShowModalCadastro)}>Cadastrar equipamento</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastros
import React,{useEffect,useState,useContext} from "react"
import {DashboardContext} from "./../../context/DashboardContext"
import { Doughnut } from 'react-chartjs-2'
import api from "./../../service/api"

export default function PeripheralsChart(){

    const [itens, setItens] = useState([])
    const [loading,setLoading] = useState(true)

    const {maintance, setMaintance,reserved, setReserved,free, setFree} = useContext(DashboardContext)


    async function getIndexData() {

        if(loading){
           await api.get("/werehouse/getAll").then((response) => {
            if (response.data) {
              setItens(response.data)
              setLoading(false)
            }
        }); 
        }else{
       
            let cont_maintance = 0;
            let cont_reserved = 0;
            let cont_free = 0;
            const type =  "peripheals"

            itens.forEach(itens => {
                if (itens.equip_state == "reservado" && itens.equip_type === type) {
                    cont_reserved++;
                } else if (itens.equip_state == "manutenção"&& itens.equip_type === type) {
                    cont_maintance++;
                } else if(itens.equip_state == "livre"&& itens.equip_type === type){
                    cont_free++;
                }
            })

            setReserved(cont_reserved)
            setMaintance(cont_maintance);
            setFree(cont_free);
        }
        
    }

    useEffect(() => {
        getIndexData()
    }, [loading])

    return( <Doughnut
                        height={300}
                        width={300}
                        data={{
                            labels: [
                                'Estoque',
                                'Manutenção',
                                'Reservas'
                            ],
                            datasets: [{
                                label: 'Perifericos',
                                data: [free, maintance, reserved],
                                backgroundColor: [
                                    '#3F3D56',
                                    '#AF4BFE',
                                    '#FF6584'
                                ],
                                borderWidth: [0, 1, 1, 0],
                                cutout: 125,
                            }]
                        }}
                        options={{
            plugins: {
                legend: {
                  position: 'right',
                  display:false,
                  responsive:true,
                },
                
            }
        }}
                    />)
}
import React from "react"
import { Doughnut } from 'react-chartjs-2'

export default function PeripheralsChart(){

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
                                data: [300, 50, 100],
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
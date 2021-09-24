import React from "react"
import { Doughnut } from 'react-chartjs-2'

export default function ComputerChart() {

    return (<Doughnut
        height={300}
        width={300}
        
        data={{
            labels: [
                'Estoque',
                'Manutenção',
                'Reservas'
            ],
            datasets: [{
                label: 'Computadores',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
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
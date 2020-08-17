import React from 'react';
import Chart from 'chart.js';
import { useEffect } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function LineChart() {
  useEffect(() => {
    const data = [
      {
        name: '16 Jul 2020',
        paguValue: '0.33',
        realValue: '0.55'
      },
      {
        name: '17 Jul 2020',
        paguValue: '0.30',
        realValue: '0.23'
      },
      {
        name: '18 Jul 2020',
        paguValue: '0.33',
        realValue: '0.55'
      },
      {
        name: '19 Jul 2020',
        paguValue: '0.34',
        realValue: '0.18'
      },
      {
        name: '20 Jul 2020',
        paguValue: '0.38',
        realValue: '0.44'
      },
      {
        name: '21 Jul 2020',
        paguValue: '0.44',
        realValue: '0.60'
      },
      {
        name: '22 Jul 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '23 Jul 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '24 Jul 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '25 Jul 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '26 Jul 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '27 Jul 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '28 Jul 2020',
        paguValue: '0.33',
        realValue: '0.55'
      },
      {
        name: '29 Jul 2020',
        paguValue: '0.30',
        realValue: '0.23'
      },
      {
        name: '30 Jul 2020',
        paguValue: '0.33',
        realValue: '0.55'
      },
      {
        name: '31 Jul 2020',
        paguValue: '0.34',
        realValue: '0.18'
      },
      {
        name: '1 Agu 2020',
        paguValue: '0.38',
        realValue: '0.44'
      },
      {
        name: '2 Agu 2020',
        paguValue: '0.44',
        realValue: '0.60'
      },
      {
        name: '3 Agu  2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '4 Agu 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '5 Agu 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '6 Agu 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '7 Agu 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '8 Agu 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '9 Agu 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '10 Agu 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '11 Agu 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '12 Agu 2020',
        paguValue: '0.48',
        realValue: '0.53'
      },
      {
        name: '13 Agu 2020',
        paguValue: '0.38',
        realValue: '0.53'
      },
      {
        name: '14 Agu 2020',
        paguValue: '0.18',
        realValue: '0.83'
      },
      {
        name: '15 Agu 2020',
        paguValue: '0.41',
        realValue: '0.23'
      },
      {
        name: '16 Agu 2020',
        paguValue: '0.48',
        realValue: '0.3'
      }
    ];

    const element = document.getElementById('line-chart');
    const ctx = element.getContext('2d');
        new Chart(ctx, {
        type: 'line',    
        plugins: [ChartDataLabels],
        data: {
            labels: data.map(({ name }) => name),
            datasets: [{
                label: '% R Pagu',
                data: data.map(({ paguValue }) => paguValue),
                borderColor: '#ffb142',
                backgroundColor: 'transparent',
                borderWidth: 2,
                datalabels: {
                    color: '#ffb142'
                }
            },
            {
                label: '% Realisasi Fisik',
                data: data.map(({ realValue }) => realValue),
                backgroundColor: 'transparent',
                borderColor: '#34ace0',
                borderWidth: 2,
                datalabels: {
                    color: '#34ace0'
                } 
            }]
        },
        options: {
            aspectRatio:2.5,
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    clamp: false
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 1,
                        stepSize: 0.25,
                        fontSize: 10
                    }
                }],
                xAxes: [{
                  ticks: {
                    fontSize: 10
                  }
                }]
            }
        }
        });
    });

    return (
        <canvas id="line-chart" height="200px" />
    );
}

export default LineChart;
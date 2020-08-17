import React from 'react';
import Chart from 'chart.js';
import { useEffect } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function MinChart() {
  useEffect(() => {
    const data = [
      {
        name: 'Asahan Barumun',
        paguValue: '33.16',
        realValue: '55.16'
      },
      {
        name: 'Jeneberang Saddang',
        paguValue: '30.93',
        realValue: '23.06'
      },
      {
        name: 'Asahan Barumun',
        paguValue: '33.16',
        realValue: '55.16'
      },
      {
        name: 'Memberamo',
        paguValue: '34',
        realValue: '18.11'
      },
      {
        name: 'PEPDAS',
        paguValue: '38.8',
        realValue: '44.95'
      }
    ];

    data.map(x => x.name = x.name.match(/.{1,10}(\s|$)/g) );
    const element = document.getElementById('min-chart');
    const ctx = element.getContext('2d');
      new Chart(ctx, {
      type: 'horizontalBar',    
      plugins: [ChartDataLabels,
        {
          beforeInit: function(chart) {
             chart.data.labels.forEach(function(e, i, a) {
              if (/\n/.test(e)) {
                a[i] = e.split(/\n/);
              }
             });
          }
       }],
      data: {
          labels: data.map(({ name }) => name),
          datasets: [{
              label: '% R Pagu',
              data: data.map(({ paguValue }) => paguValue),
              backgroundColor: '#ff5252',
              borderWidth: 1,
              barThickness: 20
          }]
      },
      options: {
        legend: {
          display: false
        },
        maintainAspectRatio:false,
        aspectRatio: 1,
        plugins: {
          datalabels: {
            color: '#FFFFFF',
            formatter: function(value) {
              return value + "%";
            }
          }
        },
          scales: {
              xAxes: [{
                  ticks: {
                      beginAtZero: true,
                      suggestedMin: 0,
                      stepSize: 10,
                      fontSize: 10
                  }
              }],
              yAxes: [{
                ticks: {
                  fontSize: 10
                }
              }]
          }
      }
    });
  });
  return (
    <canvas id="min-chart"   height="180px" />
  );
}

export default MinChart;
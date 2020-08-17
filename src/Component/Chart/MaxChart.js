import React from 'react';
import Chart from 'chart.js';
import { useEffect } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function MaxChart() {
  useEffect(() => {
    const data = [
      {
        name: 'Sei Jang Duriangkang',
        paguValue: '48.46',
        realValue: '53.79'
      },
      {
        name: 'Remu Ransiki',
        paguValue: '44.31',
        realValue: '60.89'
      },
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
      }
    ];
    data.map(x => x.name = x.name.match(/.{1,10}(\s|$)/g) );
    const element = document.getElementById('max-chart');
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
              backgroundColor: '#34ace0',
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
      <canvas id="max-chart" height="180px"  />
    );
}

export default MaxChart;
import React from 'react';
import Chart from 'chart.js';
import { useEffect } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function HorizontalChart() {
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
      },
      {
        name: 'Remu Ransiki',
        paguValue: '44.31',
        realValue: '60.89'
      },
      {
        name: 'Sei Jang Duriangkang',
        paguValue: '48.46',
        realValue: '53.79'
      }
    ];
    data.map(x => x.name = x.name.match(/.{1,10}(\s|$)/g) );

    const element = document.getElementById('chart');
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
              backgroundColor: '#ffb142',
              borderWidth: 1,
              barThickness: 25
          },
          {
            label: '% Realisasi Fisik',
            data: data.map(({ realValue }) => realValue),
            backgroundColor: '#34ace0',
            borderWidth: 1,
            barThickness: 25
          }]
      },
      options: {
        aspectRatio: .8,
        maintainAspectRatio: false,
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
                      suggestedMax: 100,
                      stepSize: 20
                  }
              }],
              yAxes: [{
                ticks: {
                  fontSize: 12
                }
              }]
          }
      }
    });
  });
    return (
      <canvas id="chart" height="550px" />
    );
}

export default HorizontalChart;
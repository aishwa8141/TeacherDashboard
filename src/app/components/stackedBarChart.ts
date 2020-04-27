export const mockChartData = {
  configData: {
    'datasets': [
      {
        'label': 'School vs Subjects',

      }
    ],
    'colors': [
      {
        'borderColor': 'rgb(1, 184, 170)',
        'backgroundColor': 'rgba(2, 79, 157, 1)'
      }
    ],
    'chartType': 'horizontalBar',
    'options': {
      'scales': {
        'yAxes': [
          {
            'scaleLabel': {
              'display': true,
              'labelString': 'Schools',
              'stacked': true
            },
            gridLines: {
              offsetGridLines: false,
              drawOnChartArea: false
            },
            offset: true,
            'ticks': {
              fontSize: 10
            }
          }
        ],
        'xAxes': [
          {
            'scaleLabel': {
              'display': true,
              'labelString': 'Number of teachers',
              'stacked': true
            },
            gridLines: {
              offsetGridLines: false,
              drawOnChartArea: false

            },
            offset: true,
            'ticks': {
              'stepSize': 5,
              max: 25,
              min: 0,
            }
          },
        ]
      },
      'tooltips': {
        'intersect': true,
        'mode': 'x-axis',
        'titleSpacing': 5,
        'bodySpacing': 5,
        'position': 'average'
      },
      'title': {
        'fontSize': 16,
        'display': true,
        // 'text': 'Schools Vs Subjects'
      },
      'legend': {
        'display': true,
        'position': 'bottom',
        'align': 'start',
        horizontalAlign: 'left',
        offsetX: 10
      },
      'responsive': true
    }
  }
}
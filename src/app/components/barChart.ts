export const chartData = {
    configData: {
        'datasets': [
            {
                'label': 'School vs Courses',

            }
        ],
        'colors': [
            {
                'borderColor': 'rgb(1, 184, 170)',
                'backgroundColor': 'rgba(2, 79, 157, 1)'
            }
        ],
        'chartType': 'bar',
        'options': {
            'scales': {
                'yAxes': [
                    {
                        'scaleLabel': {
                            'display': true,
                            'labelString': 'Number of teachers'
                        },
                        gridLines: {
                            offsetGridLines: false,
                            drawOnChartArea: false
                        },
                        offset: true,
                        'ticks': {
                            'padding': 20,
                            'stepSize': 10,
                            max: 50,
                            min: 0,
                        }
                    }
                ],
                'xAxes': [
                    {
                        'scaleLabel': {
                            'display': true,
                            'labelString': 'Courses'                        },
                        gridLines: {
                            offsetGridLines: false,
                            drawOnChartArea: false
                        },
                        offset: true
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
                // 'text': 'School vs Courses'
            },
            'legend': {
                'display': true,
                'position': 'bottom',
                'align': 'end',
                horizontalAlign: 'left',
                offsetX: 10
            },
            'responsive': true
        }
    }
}
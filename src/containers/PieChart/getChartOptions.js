const getChartOptions = (data) => {

    return {
        credits: {
            enabled: false
        },
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 250,
            style: {
                fontFamily: "Poppins"
            }
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>&#8377;{point.y:.2f}</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                innerSize: 150,
                dataLabels: {
                    enabled: false,
                    // format: '<b>{point.name}</b>: &#8377;{point.y:.2f}'
                }
            }
        },
        series: [{
            name: 'Spend Amount',
            colorByPoint: true,
            data
        }],
        responsiveness: {

        }
    }


};


export default getChartOptions;
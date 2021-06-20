const getChartOptions = () => {
  return {
    chart: {
      type: "column",
      style: {
        fontFamily: "Poppins",
      },
      events: {
        render() {
          const chart = this;
          const containerHeight = chart.renderTo.parentElement.clientHeight;
          if (containerHeight && chart.chartHeight !== containerHeight) {
            chart.update({
              chart: {
                height: containerHeight,
              },
            });
          }
        },
      },
    },
    title: {
      style: {
        display: "none",
      },
    },
    legend: {
      enabled: false,
    },
    navigator: {
      enabled: true,
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: [
      {
        title: {
          style: {
            display: "none",
          },
        },
      },
    ],
    tooltip: {
        shared: true,
      split: false
    },
    rangeSelector: {
        enabled: true,
        allButtonsEnabled: true,
        selected: 1,
        buttonTheme: {
            width: 60
        },
        buttons: [{
            text: "Day",
            type: "day",
            count: 30,
            preserveDataGrouping: true,
            dataGrouping: {
                approximation: "sum",
                groupAll: true,
                forced: true,
                units: [['day', [1]]]
            }
        },{
            text: "Week",
            type: "week",
            count: 12,
            preserveDataGrouping: true,
            dataGrouping: {
                forced: true,
                approximation: "sum",
                units: [['week', [1]]]
            },
        },{
            text: "Month",
            type: "year",
            count: 1,
            preserveDataGrouping: true,
            dataGrouping: {
                approximation: "sum",
                groupAll: true,
                forced: true,
                units: [['month',[1]]]
            }
        },{
            text: "Year",
            type: "all",
            preserveDataGrouping: true,
            dataGrouping: {
                approximation: "sum",
                groupAll: true,
                forced: true,
                units: [['year',[1]]]
            }
        }]
    }
  };
};


export default getChartOptions;
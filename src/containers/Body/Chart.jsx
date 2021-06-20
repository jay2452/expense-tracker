import React from "react";
import HighchartsWrapper from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

// Highcharts.dateFormats = {
//     W: function (timestamp) {
//       var date = new Date(timestamp),
//       day = date.getUTCDay() == 0 ? 7 : date.getUTCDay(),
//           dayNumber;
//       date.setDate(date.getUTCDate() + 4 - day);
//       dayNumber = Math.floor((date.getTime() - new Date(date.getUTCFullYear(), 0, 1, -6)) / 86400000);
//       return 1 + Math.floor(dayNumber / 7);
//     },
//     Q: function(timestamp) {
//       var date = new Date(timestamp),
//       month = date.getUTCMonth() + 1,
//       quarter;
  
//       quarter = (Math.ceil(month / 3));
//       return quarter;
//     }
//   };

Highcharts.setOptions({
    lang: {
        "thousandsSep": ","
    }
  });

const Chart = props => {
    const {chartOptions} = props;
    return (
        <HighchartsWrapper highcharts={Highcharts} constructorType={"stockChart"} options={chartOptions}/>
    )
};


export default React.memo(Chart);
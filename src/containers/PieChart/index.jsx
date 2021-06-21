import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import HighchartsWrapper from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

import getChartOptions from "./getChartOptions";
import { useSelector } from "react-redux";

// const useStyles = makeStyles((theme) => ({
//   spendSummaryContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   value: {
//     textAlign: "center",
//     fontSize: "20px",
//     fontWeight: "500",
//   },
// }));

const PieChart = (props) => {
  // const classes = useStyles();
  const { categoryWiseData } = props;
  

  const uiState = useSelector((state) => state.ui);
  const spendState = useSelector(state => state.spends);

  const pieChartData = React.useMemo(() => {

    let data = [];

    for (const cat in categoryWiseData) {
      data.push({
        name: cat,
        y: categoryWiseData[cat]
      });
    };
    return data;
  }, [categoryWiseData])
  const chartOptions = getChartOptions(pieChartData);

  const {
    currentDaySpend = 0,
    currentWeekSpend = 0,
    currentMonthSpend = 0,
    currentYearSpend = 0,
  } = spendState;

  const { currentSelectedTimelineButton = "Today" } = uiState;
  let amount = 0;

  switch (currentSelectedTimelineButton) {
    case "Today":
      amount = currentDaySpend;
      break;
    case "Week":
      amount = currentWeekSpend;
      break;

    case "Month":
      amount = currentMonthSpend;
      break;

    case "Year":
      amount = currentYearSpend;
      break;

    default:
      break;
  }

  chartOptions.chart.events = {
    render(){
      try {
        const chart = this;

        const titleNodes = document.querySelectorAll("#center-text-piechart");
        for(let i=0; i<titleNodes.length; i++){
          titleNodes[i].remove();
        }
        // debugger;

        const text = chart.renderer.text(`
          <div id="center-text-piechart">
            <div style="text-align: center;font-family: Poppins">
              ${currentSelectedTimelineButton} <br/>
              <div style="font-size: 20px; font-weight: 500;" >&#8377; ${amount}</div>
            </div>
          </div>
        `, undefined, undefined, true).add();
        const textBBox = text.getBBox();
        const x = chart.plotLeft + (chart.plotWidth  * 0.5) - (textBBox.width  * 0.5);
        const y = chart.plotTop  + (chart.plotHeight * 0.5) - (textBBox.height * 0.25);
        text.attr({x,y});
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <HighchartsWrapper
          highcharts={Highcharts}
          constructorType={"chart"}
          options={chartOptions}
        />
      </Grid>

      {/* <Grid item xs={6} className={classes.spendSummaryContainer}>
        <div>
          <div style={{ textAlign: "center" }}>
            {currentSelectedTimelineButton}
            <div className={classes.value}>&#8377; {amount}</div>
          </div>
        </div>
      </Grid> */}
    </Grid>
  );
};

export default PieChart;

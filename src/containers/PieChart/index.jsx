import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import HighchartsWrapper from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

import getChartOptions from "./getChartOptions";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  spendSummaryContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "500",
  },
}));

const PieChart = (props) => {
  const classes = useStyles();
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

  return (
    <Grid container>
      <Grid item xs={6}>
        <HighchartsWrapper
          highcharts={Highcharts}
          constructorType={"chart"}
          options={chartOptions}
        />
      </Grid>

      <Grid item xs={6} className={classes.spendSummaryContainer}>
        <div>
          <div style={{ textAlign: "center" }}>
            {currentSelectedTimelineButton}
            <div className={classes.value}>&#8377; {amount}</div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default PieChart;

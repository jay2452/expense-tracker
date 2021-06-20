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

  const chartOptions = getChartOptions();

  const uiState = useSelector(state => state.ui);

  const {currentSelectedTimelineButton = "Today"} = uiState;

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
            <div className={classes.value}>
              &#8377; 1500
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default PieChart;

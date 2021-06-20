import { Grid, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  summaryContainer: {
    height: "100%",
  },
  tile: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  value: {
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "500"
  }
}));

const SummarCard = (props) => {
  const classes = useStyles();

  const spends = useSelector(state => state.spends);

  // debugger;

  return (
    <Grid container className={classes.summaryContainer}>
      <Grid item sm className={classes.tile}>
        <div>
          Today
          <div className={classes.value}>&#8377; {spends.currentDaySpend} </div>
        </div>
      </Grid>
      <Grid item sm className={classes.tile}>
        <div>
          Week
          <div className={classes.value}>&#8377; {spends.currentWeekSpend} </div>
        </div>
      </Grid>
      <Grid item sm className={classes.tile}>
        <div>
          Month
          <div className={classes.value}>&#8377; {spends.currentMonthSpend}</div>
        </div>
      </Grid>
      <Grid item sm className={classes.tile}>
        <div>
          Year
          <div className={classes.value}>&#8377; {spends.currentYearSpend}</div>
        </div>
      </Grid>
    </Grid>
  );
};

export default SummarCard;

import React, { useMemo } from "react";
import { Fab, Grid, makeStyles, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getSpendsList } from "../../store/actionCreators/spendActions";
// import Categories from './../Categories/index';
// import SummarCard from './../SummaryCard/index';

import { CircularProgress } from "@material-ui/core";
// import SpendDialogBox from './SpendDialogBox';
// import prepareDataForChart from "./prepareDataForChart";
// import getChartOptions from './getChartOptions';
// import Chart from "./Chart";
import PieChart from "./../PieChart/index";
import TimelineButtonGroup from "./../TimelineButtonGroup/index";
import SpendList from "./../SpendList/index";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import getCategoryWiseSpendForSelectedTimelineButton from "../SpendList/getCategoryWiseSpendForSelectedTimelineButton";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    background: "white",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // height: "90vh",
    padding: "20px",
    "@media only screen and (min-width: 800px)": {
      width: "800px",
      margin: "30px auto",
    },
  },
  summayPanel: {
    width: "100%",
    // height: "20%",
    marginBottom: "10px",
  },
  chart: {
    width: "100%",
    height: "80%",
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Body = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const uiState = useSelector(state => state.ui);
  const { currentSelectedTimelineButton } = uiState;
  const spendsList = useSelector((state) => state.spends);
  const data = spendsList.data || [];
  // const chartOptions = getChartOptions();

  React.useEffect(() => {
    if (data.length === 0) {
      dispatch(getSpendsList());
    }
  }, [dispatch]);

  const handleCreateSpend = React.useCallback(
    (e) => {
      history.push("/addSpend");
    },
    [history]
  );

  const categoryWiseData = useMemo(() => {
    return getCategoryWiseSpendForSelectedTimelineButton(currentSelectedTimelineButton, data);
  }, [currentSelectedTimelineButton, data]);

  if (data.length === 0) return <CircularProgress />;

  return (
    <Grid container className={classes.gridContainer} spacing={1}>
      <PieChart categoryWiseData={categoryWiseData} />

      <TimelineButtonGroup  />

      <SpendList categoryWiseData={categoryWiseData} />

      <Fab
        aria-label="Add Expense"
        onClick={handleCreateSpend}
        className={classes.fab}
        color="primary"
      >
        <AddIcon />
      </Fab>
    </Grid>
  );
};

export default React.memo(Body);

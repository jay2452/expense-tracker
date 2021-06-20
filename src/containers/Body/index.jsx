import React from "react";
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
import PieChart from './../PieChart/index';
import TimelineButtonGroup from './../TimelineButtonGroup/index';
import SpendList from './../SpendList/index';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';


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
      margin: "30px auto"
    }
  },
  summayPanel: {
    width: "100%",
    // height: "20%",
    marginBottom: "10px"
  },
  chart: {
    width: "100%",
    height: "80%"
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}));

const Body = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const spendsList = useSelector(state => state.spends);
  const data = spendsList.data || [];
  // const chartOptions = getChartOptions();

  React.useEffect(() => {
    dispatch(getSpendsList());
  }, [dispatch]);

  const handleCreateSpend = React.useCallback((e) => {
    history.push("/addSpend")
  }, [history]) 
  

  // const preparedData = React.useMemo(() => prepareDataForChart(data), [data.length]);


  if(data.length === 0) return <CircularProgress/>;

  // chartOptions.series = [{
  //   // pointWidth: 20,
  //   name: "Money spent",
  //   data: preparedData
  // }]

  return (
    <Grid container className={classes.gridContainer} spacing={1}>


      <PieChart />


      <TimelineButtonGroup />

      <SpendList />



      <Fab aria-label="Add Expense" onClick={handleCreateSpend} className={classes.fab} color="primary">
      <AddIcon />
          </Fab>


      {/* <Grid item xs={3}>
          <Categories />
      </Grid>
      <Grid item xs={9}>
        <Paper elevation={0} className={classes.summayPanel}>
          <SummarCard />
        </Paper>
        <Paper elevation={0} className={classes.chart}>
          <Chart chartOptions={chartOptions} />
        </Paper>
      </Grid> 

      <SpendDialogBox/> */}


    </Grid>
  );
};

export default React.memo(Body);

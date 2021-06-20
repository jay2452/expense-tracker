import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
  Grid,
  List,
  ListItemText,
  TextField, Tooltip
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import { Autocomplete } from "@material-ui/lab";
import categoriesList from "./categoriesList";
import { useDispatch } from "react-redux";
import { toggleSpendFormDialogBox } from "./../../store/actionCreators/uiActions";

const useStyles = makeStyles((theme) => ({
  categoriesContainer: {
    // position: "static",
    // height: "85vh",
    // overflowY: "auto",
      padding: "4%"
  },
  list: {
    width: "100%",
  },
  iconButton: {
    margin: "auto"
  }
}));

const Categories = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const listRef = React.useRef();

  // console.log("Categories called !!!");

  const categoriesInListOf3 = React.useMemo(() => {
    let arr1 = [];
    let arr2 = [];
    categoriesList.forEach((item, idx) => {
      if (idx !== 0 && idx % 3 === 0) {
        arr2.push(arr1);
        arr1 = [];
      }
      arr1.push(item);
    });
    return arr2;
  }, [categoriesList]);
  // let count = Math.ceil(categoriesList.length / 3);

  // debugger

  return (
    <Grid className={classes.categoriesContainer} container spacing={1}>
      {categoriesInListOf3.map((cat, idx) => {
        return(
        <Grid item xs={12}>
          <Grid container>
            {cat.map((item, idx1) => {
              return (
                <Grid item xs={4} style={{ display: "flex"}}>
                  <Tooltip title={item.type}>
                  <IconButton className={classes.iconButton}>
                    <Icon>{item.icon}</Icon>
                  </IconButton>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
        </Grid>)
      })}

      {/* <Autocomplete 
            id="combo-box-demo"
            options={categoriesList}
            getOptionLabel={(option) => option.type}
            style={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Filter Categories" variant="outlined" />}
        /> 
        <List id="categoriesList" ref={listRef} className={classes.list}>
          {categoriesList.map((item, idx) => {
            return (
              <ListItem key={item.type}>
                <ListItemAvatar>
                  <Avatar>
                    <Icon>{item.icon}</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.type} />
                <ListItemSecondaryAction onClick={(e) => {
                  dispatch(toggleSpendFormDialogBox(true, item.type));
                }}>
                  <IconButton edge="end" aria-label="add" data-title={item.type} >
                    <AddCircleOutlineSharpIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        */}
    </Grid>
  );
};

export default React.memo(Categories);

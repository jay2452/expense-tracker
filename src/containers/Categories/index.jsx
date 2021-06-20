import React from "react";
import {
  // ListItem,
  // ListItemAvatar,
  // Avatar,
  // ListItemSecondaryAction,
  IconButton,
  makeStyles,
  Grid,
  // List,
  // ListItemText,
  // TextField, 
  Tooltip,
  useTheme
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
// import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
// import { Autocomplete } from "@material-ui/lab";
import categoriesList from "./categoriesList";
import { useDispatch, useSelector } from "react-redux";
// import { toggleSpendFormDialogBox } from "./../../store/actionCreators/uiActions";
import { setSpendFormSelectedCategory } from "../../store/actionCreators/spendActions";
import { Typography } from "@material-ui/core";

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
  const spendState = useSelector(state => state.spends);
  // const listRef = React.useRef();



  // console.log("Categories called !!!");
  const {spendFormSelectedCategory} = spendState;
  const theme = useTheme();
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
  }, []);

  
  const handleSelect = React.useCallback((e) => {
    const selectedCategory = e.currentTarget.dataset.category;
    dispatch(setSpendFormSelectedCategory(selectedCategory))
  },[dispatch]);

  React.useLayoutEffect(() => {
    // deselect other categories
    categoriesList.forEach((item, idx) => {
      const node = document.getElementById(`category-${item.type}`);
      if(node){
        if(item.type === spendFormSelectedCategory){
          node.style.backgroundColor = theme.palette.primary.main;
          node.firstChild.style.color = "white";
        }else{
          node.style.backgroundColor = "";
          node.firstChild.style.color = "black";
        }
      }
      
    });
  }, [spendFormSelectedCategory, theme.palette.primary.main])


  return (
    <Grid className={classes.categoriesContainer} container spacing={1}>
      <Grid item xs={12}>
        <Typography align="center">
          {spendFormSelectedCategory}
        </Typography>
        
      </Grid>
      {categoriesInListOf3.map((cat, idx) => {
        return(
        <Grid key={`row-${idx}`} item xs={12}>
          <Grid container>
            {cat.map((item, idx1) => {
              return (
                <Grid key={`row-${idx}-item-${idx1}`} id={`category-${item.type}`} item xs={4} style={{ display: "flex"}}>
                  <Tooltip title={item.type}>
                  <IconButton className={classes.iconButton} data-category={item.type} onClick={handleSelect}>
                    <Icon>{item.icon}</Icon>
                    {/* <div>{item.type}</div> */}
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

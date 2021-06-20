import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  // Avatar,
  ListItemText,
  makeStyles,
  IconButton
} from "@material-ui/core";

// import FolderIcon from "@material-ui/icons/Folder";
// import DeleteIcon from "@material-ui/icons/Delete";
// import { IconButton } from "@material-ui/core";
// import { useSelector } from 'react-redux';
// import getCategoryWiseSpendForSelectedTimelineButton from "./getCategoryWiseSpendForSelectedTimelineButton";
// import { useMemo } from "react";
import { Icon } from "@material-ui/core";
import categoryIcon from "../Categories/categoryIcon";

const useStyles = makeStyles(theme => ({
  iconButton: {
    color: "black"
  }
}));

const SpendList = (props) => {

    const classes = useStyles();
    // const uiState = useSelector(state => state.ui);
    // const spendState = useSelector(state => state.spends);
    const {categoryWiseData} = props;
    // const { currentSelectedTimelineButton } = uiState;
    
    // const { data } = spendState;
    // get categoryWise data for current selected button
    // const categoryWiseData = useMemo(() => {
    //   return getCategoryWiseSpendForSelectedTimelineButton(currentSelectedTimelineButton, data);
    // }, [currentSelectedTimelineButton, data]);
    // debugger

    const listItems = [];
    for (const cat in categoryWiseData) {
      listItems.push(
        <ListItem>
          <ListItemAvatar>
            <IconButton className={classes.iconButton}>
              <Icon>{categoryIcon[cat]}</Icon>
            </IconButton>
          </ListItemAvatar>
          <ListItemText primary={cat} secondary="" />
          <ListItemSecondaryAction>
            <div className={classes.value}>
                &#8377; {categoryWiseData[cat]}
             </div>
          </ListItemSecondaryAction>
        </ListItem>
      )
    };

    if(listItems.length === 0){
      listItems.push(
        <ListItem>
          <ListItemText primary="No data" secondary="" />
        </ListItem>
      )
    }

  return (
    <div>
      <List dense={true}>
        {listItems}
      </List>
    </div>
  );
};

export default SpendList;

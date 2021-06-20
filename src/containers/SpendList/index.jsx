import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    value: {

    }
}));

const SpendList = (props) => {

    const classes = useStyles();

    // get categoryWise data for current selected button

  return (
    <div>
      <List dense={true}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Bills" secondary="" />
          <ListItemSecondaryAction>
            <div className={classes.value}>
                &#8377; 1500
             </div>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="House" secondary="" />
          <ListItemSecondaryAction>
            <div className={classes.value}>
                &#8377; 1500
             </div>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Food" secondary="" />
          <ListItemSecondaryAction>
            <div className={classes.value}>
                &#8377; 1500
             </div>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};

export default SpendList;

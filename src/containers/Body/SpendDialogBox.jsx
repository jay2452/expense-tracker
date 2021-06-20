import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
// import Draggable from "react-draggable";
import { setSpendValue, toggleSpendFormDialogBox } from './../../store/actionCreators/uiActions';

// const useStyles = makeStyles((theme) => ({}));

const SpendDialogBox = (props) => {
  // const classes = useStyles();

  const dispatch = useDispatch();
  const uiState = useSelector(state => state.ui);

  const [spendAmount, setSpendAmount] = React.useState(0);
  const [descriptionText, setDescriptionText] = React.useState("");

  const handleClose = () => {
      dispatch(toggleSpendFormDialogBox(false, ""));
      setSpendAmount(0);
      setDescriptionText("");
  }

  const handleSave = () => {
    dispatch(setSpendValue(uiState.spendDialogFormTitle, descriptionText, spendAmount));
    handleClose();
  }

  const handleSpendInputChange = e => setSpendAmount(e.target.value);
  const handleDescriptionInputChange = e => setDescriptionText(e.target.value);

  return (
    <Dialog
      open={uiState.isSpendDialogBoxOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{"Add spend for " + uiState.spendDialogFormTitle}</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText> */}
        <TextField
          autoFocus
          margin="dense"
          label="Spent Amount"
          type="number"
          fullWidth
          value={spendAmount}
          onChange={handleSpendInputChange}
        />
        <br />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          value={descriptionText}
          onChange={handleDescriptionInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave}  color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SpendDialogBox;

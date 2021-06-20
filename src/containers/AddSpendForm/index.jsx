import { TextField, makeStyles, Button } from "@material-ui/core";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import Categories from "./../Categories/index";
import TopAppBar from "./../ExpenseTracker/TopAppBar";
import { useDispatch } from 'react-redux';
import { setSpendFormSelectedCategory } from "../../store/actionCreators/spendActions";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: 10,
    margin: "auto",
    maxWidth: "500px",
  },
  form: {
    width: "100%",
  },
  actionButton: {
    float: "right",
  },
}));

const AddSpendForm = (props) => {
  const classes = useStyles();
    const dispatch = useDispatch();
  const history = useHistory();

  const handleCancel = useCallback((e) => {
    dispatch(setSpendFormSelectedCategory(null));
    history.push("/");
  }, [history, dispatch]);

  const handleSave = useCallback(e => {

    history.push("/");
  }, [history]);

  const [spendAmount, setSpendAmount] = useState(0);
  const [description, setDescription] = useState("");

  const handleSpendChange = e => setSpendAmount(e.target.value);
  const handleDescriptionChange = e => setDescription(e.target.value);

  return (
    <>
      <TopAppBar />
      <div className={classes.formContainer}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            type="number"
            id="spend-amount-input"
            label="Amount spent"
            value={spendAmount}
            onChange={handleSpendChange}
            fullWidth
          />

            <TextField
            type="text"
            rows="2"
            id="spend-amount-description"
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
          />

          <Categories />

          <div className={classes.actionButton}>
            <Button color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button color="primary" onClick={handleSave}>Save</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSpendForm;

import { TextField, makeStyles, Button } from "@material-ui/core";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Categories from "./../Categories/index";
import TopAppBar from "./../ExpenseTracker/TopAppBar";

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

  const history = useHistory();

  const handleCancel = useCallback((e) => {
    history.push("/");
  }, [history]);

  const handleSave = useCallback(e => {

    history.push("/");
  }, [history])

  return (
    <>
      <TopAppBar />
      <div className={classes.formContainer}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            type="number"
            id="spend-amount-input"
            label="Amount spent"
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

import { TextField, makeStyles, Button } from "@material-ui/core";
import { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Categories from "./../Categories/index";
import TopAppBar from "./../ExpenseTracker/TopAppBar";
import { useDispatch, useSelector } from "react-redux";
import { saveSpendForDate, setSpendFormSelectedCategory } from "../../store/actionCreators/spendActions";
import { getCurrentDate_IN_DDMMYYY } from "../../utils";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: 10,
    margin: "auto",
    maxWidth: "500px",
    marginTop: "5px",
  },
  form: {
    width: "100%",
  },
  actionButton: {
    float: "right",
  },
}));

// const currentDate = new Date();
// const dd = currentDate.getDate();
// const mm = currentDate.getMonth() + 1;
// const yyyy = currentDate.getFullYear();
// const ddmmyyyy = `${dd}-${mm}-${yyyy}`;

const AddSpendForm = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const spendState = useSelector(state => state.spends);
  const {spendFormSelectedCategory} = spendState;
  const [spendAmount, setSpendAmount] = useState(0);
  const [description, setDescription] = useState("");

  const ddmmyyyy = getCurrentDate_IN_DDMMYYY();

  const handleCancel = useCallback(
    (e) => {
      dispatch(setSpendFormSelectedCategory(null));
      history.push("/");
    },
    [history, dispatch]
  );

  const handleSave = useCallback(
    (e) => {
        dispatch(saveSpendForDate(spendFormSelectedCategory, description, spendAmount, ddmmyyyy));
        dispatch(setSpendFormSelectedCategory(null));
      history.push("/");
    },
    [history, spendFormSelectedCategory, description, spendAmount, ddmmyyyy]
  );

  

  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);

  const handleSpendChange = (e) => setSpendAmount(Number(e.target.value));
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  useEffect(() => {
    if(typeof spendAmount === "number" && spendAmount > 0 && spendFormSelectedCategory && isSubmitBtnDisabled === true){
        setIsSubmitBtnDisabled(false);
    }else if((!spendAmount || !spendFormSelectedCategory) && isSubmitBtnDisabled === false){
        setIsSubmitBtnDisabled(true);
    }
  }, [spendAmount, description, spendFormSelectedCategory, isSubmitBtnDisabled])


  return (
    <>
      <TopAppBar />
      <div className={classes.formContainer}>
        <form className={classes.form} noValidate autoComplete="off">
          <div style={{ textAlign: "center" }}>
            <span>{ddmmyyyy}</span>
          </div>
          <TextField
            required
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
            <Button disabled={isSubmitBtnDisabled} color="primary" onClick={handleSave}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSpendForm;

import { ButtonGroup, Button, makeStyles, useTheme } from "@material-ui/core";
import { useCallback, useLayoutEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentSelectedTimelineButton } from './../../store/actionCreators/uiActions';

const useStyles = makeStyles(theme => ({
    root: {
        justifyContent: "center"
    }
}));

const TimelineButtonGroup = props => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const uiState = useSelector(state => state.ui);

    const { currentSelectedTimelineButton} = uiState;

    const theme = useTheme();

    useLayoutEffect(() => {

        // highlight the selected Button
        
        const todayButton = document.getElementById("Today");
        todayButton.style.backgroundColor = "";
        todayButton.style.color = "black";

        const weekButton = document.getElementById("Week");
        weekButton.style.backgroundColor = "";
        weekButton.style.color = "black";

        const monthButton = document.getElementById("Month");
        monthButton.style.backgroundColor = "";
        monthButton.style.color = "black";

        const yearButton = document.getElementById("Year");
        yearButton.style.backgroundColor = "";
        yearButton.style.color = "black";

        // debugger; 
        // console.log(theme);
        const selectedButtonNode = document.getElementById(currentSelectedTimelineButton);
        selectedButtonNode.style.backgroundColor = theme.palette.primary.light;
        selectedButtonNode.style.color = "aliceblue";

    }, [currentSelectedTimelineButton, theme]);


    const handleClick = useCallback((e) => {
        const buttonValue = e.currentTarget.id;
        dispatch(changeCurrentSelectedTimelineButton(buttonValue));
        
        

        // fire the update dataset call 
    }, [dispatch])


    return (
        <ButtonGroup className={classes.root} variant="text" aria-label="Timeline Buttons">
            <Button id="Today" onClick={handleClick} >Today</Button>
            <Button id="Week"  onClick={handleClick} >Week</Button>
            <Button id="Month" onClick={handleClick}>Month</Button>
            <Button id="Year"  onClick={handleClick}>Year</Button>
        </ButtonGroup>
    )
}


export default TimelineButtonGroup;
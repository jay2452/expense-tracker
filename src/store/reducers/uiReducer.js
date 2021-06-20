
const initialState = {
    isSpendDialogBoxOpen: false,
    spendDialogFormTitle: "",
    currentSelectedTimelineButton: "Today",
};


export default function uiReducer(state = initialState, action){
    const updatedState = {...state};

    switch (action.type) {
        case "TOGGLE_SPEND_DIALOG_BOX":
            const {isOpen, title} = action.values;
            updatedState.isSpendDialogBoxOpen = isOpen;
            updatedState.spendDialogFormTitle = title
            break;

        case "CHANGE_CURRENT_TIMELINE_SELECTED_BUTTON": 
            {
                const { selectedButton } = action.values;
                updatedState.currentSelectedTimelineButton = selectedButton;
                console.log("currentSelectedTimelineButton :: ", updatedState.currentSelectedTimelineButton)
            }
            
            break;
    
        
        default:
            break;
    }

    return updatedState;
}
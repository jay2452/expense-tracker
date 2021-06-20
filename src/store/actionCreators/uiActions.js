

export const toggleSpendFormDialogBox = (isOpen = false, title) => {
    return {
        type: "TOGGLE_SPEND_DIALOG_BOX",
        values: {
            isOpen,
            title
        }
    }
}


export const changeCurrentSelectedTimelineButton = (selectedButton) => {
    return {
        type: "CHANGE_CURRENT_TIMELINE_SELECTED_BUTTON",
        values: {
            selectedButton
        }
    }
}
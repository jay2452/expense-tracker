import axios from "axios"



const saveResponseToReducer = (responseData = {}) => {
    return {
        type: "GET_SPENDS_LIST",
        values: {
            data: responseData.items
        }
    }
}

export const getSpendsList = () => {
    return dispatch => {
        axios({
            url: "https://run.mocky.io/v3/01031ce7-ba80-4a3a-b07a-2d9dee0859b2",
            method: "get"
        }).then(response => {
            dispatch(saveResponseToReducer(response.data));
        })
    }
}

export const setSpendFormSelectedCategory = (spendFormSelectedCategory) => {
    return {
        type: "SELECT_SPEND_FORM_CATEGORY",
        values: {
            spendFormSelectedCategory
        }
    }
}

// export const saveSpendForDate = (date, amount, category, description) => {
//     return {
//         type: "SAVE_SPEND_FOR_DATE",
//         values: { 
//             date, amount, category, description
//         }
//     }
// }

export const saveSpendForDate = (category = "Others", description = "", amount = 0, date) => {
    return {
        type: "SAVE_SPEND_FOR_DATE",
        values: {
            category, description, amount, date
        }
    }
}
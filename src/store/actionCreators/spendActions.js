import axios from "axios";
import { Dexie } from 'dexie';

const db = new Dexie('ExpenseTracker');
db.version(1).stores(
  { items: "++id,category,date,amount,description,email" }
);


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
        // axios({
        //     url: "https://run.mocky.io/v3/01031ce7-ba80-4a3a-b07a-2d9dee0859b2",
        //     method: "get"
        // }).then(response => {
        //     dispatch(saveResponseToReducer(response.data));
        // })
        // Fetch from indexDB
        db.items.toArray().then(result => {
            dispatch(saveResponseToReducer({
                items: result
            }));
        });
    }
}

export const setSpendFormSelectedCategory = (spendFormSelectedCategory) => {
    return {
        type: "SELECT_SPEND_FORM_CATEGORY",
        values: {
            spendFormSelectedCategory
        }
    }
};

const saveSpendInState = (category, description, amount, date) => {
    return {
        type: "SAVE_SPEND_FOR_DATE",
        values: {
            category, description, amount, date
        }
    }
}

export const saveSpendForDate = (category = "Others", description = "", amount = 0, date) => {
    return dispatch => {
        db.items.add({
            category,
            date,
            amount, description,
            email: "jayant2452@gmail.com"
        }).then(id => {
            dispatch(saveSpendInState(category, description, amount, date));
        })
    }
}
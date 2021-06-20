import { combineReducers } from "redux";
import spendReducer from "./spendReducer";
import uiReducer from './uiReducer';


export default combineReducers({
    spends: spendReducer,
    ui: uiReducer
})
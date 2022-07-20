import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer.js";
import eventsReducer from "./eventsReducer";

const mainReducer = combineReducers({
    productReducer,
    userReducer,
    eventsReducer

})

export default mainReducer
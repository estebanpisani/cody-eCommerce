import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer.js";

const mainReducer = combineReducers({
    productReducer,
    userReducer
})

export default mainReducer
import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer.js";
import { shoppingReducer } from "./shoppingReducer";

const mainReducer = combineReducers({
    productReducer,
    userReducer,
    shopping:shoppingReducer
})

export default mainReducer
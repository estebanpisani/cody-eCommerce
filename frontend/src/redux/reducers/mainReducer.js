import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer.js";
import { shoppingReducer } from "./shoppingReducer";
import eventsReducer from "./eventsReducer";

const mainReducer = combineReducers({
    productReducer,
    userReducer,
    shopping:shoppingReducer,
    eventsReducer

})

export default mainReducer
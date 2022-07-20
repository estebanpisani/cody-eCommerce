import { combineReducers } from "redux";
import eventsReducer from "./eventsReducer";
import commentsReducer from "./commentsReducer";

const mainReducer = combineReducers ({
    eventsReducer, commentsReducer
})

export default mainReducer;
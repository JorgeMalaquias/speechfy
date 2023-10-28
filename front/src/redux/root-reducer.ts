import { combineReducers } from "redux";
import userReducer from "./user/slice";
import recordReducer from "./record/slice";

const rootReducer = combineReducers({ userReducer, recordReducer });

export default rootReducer;

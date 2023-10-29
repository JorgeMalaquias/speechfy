import { combineReducers } from "redux";
import recordReducer from "./record/slice";

const rootReducer = combineReducers({ recordReducer });

export default rootReducer;

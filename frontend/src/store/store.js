import {combineReducers, createStore} from "redux";
import {registrationReducer} from "./registration-reducer";

let combinedReducers = combineReducers({registrationPage : registrationReducer});
let store = createStore(combinedReducers);

export default store;

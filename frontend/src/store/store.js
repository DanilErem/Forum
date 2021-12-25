import {combineReducers, createStore} from "redux";
import {registrationReducer} from "./registration-reducer";
import {chatsReducer} from "./chats-reducer";

let combinedReducers = combineReducers({
    registrationPage : registrationReducer,
    chatsPage  : chatsReducer,
});
let store = createStore(combinedReducers);

export default store;

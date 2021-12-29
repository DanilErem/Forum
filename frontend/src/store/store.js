import {combineReducers, createStore} from "redux";
import {registrationReducer} from "./registration-reducer";
import {chatsReducer} from "./chats-reducer";
import {userReducer} from "./user-reducer";

let combinedReducers = combineReducers({
    registrationPage : registrationReducer,
    chatsPage  : chatsReducer,
    usersReducer : userReducer,
});
let store = createStore(combinedReducers);

export default store;

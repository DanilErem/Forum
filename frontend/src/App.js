import './App.css';
import React from "react";
import store from "./store/store";
import Chats from "./Component/Chats/Chats";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import ChatContainer from "./Component/Chats/Chat/ChatContainer";
import AuthPage from './Pages/AuthPage/AuthPage';
function App() {
    return (
        <>
        <Navbar />
        <div className="app">
            <Routes>
                <Route  path={"/"} element={<AuthPage dispatch={store.dispatch} state={store.getState().registrationPage}/>}/>
                <Route path={"/chats"} >
                    <Route index element={<Chats dispatch={store.dispatch} chatPage={store.getState().chatsPage}/>}/>
                    <Route path={":id"} element={<ChatContainer dispatch={store.dispatch} chatPage={store.getState().chatsPage}/>}/>
                </Route>
            </Routes>
        </div>
        </>
    );
}

export default App;

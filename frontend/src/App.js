import './App.css';
import React from "react";
import store from "./store/store";
import Chats from "./Component/Chats/Chats";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Regestration from "./Component/Regestration/Regestration";
import Navbar from "./Component/Navbar/Navbar";
import ChatContainer from "./Component/Chats/Chat/ChatContainer";
function App() {
    return (
        <>
        <Navbar />
        <div className="app">
            <Routes>
                <Route  path={"/"} element={<Regestration dispatch={store.dispatch} state={store.getState().registrationPage}/>}/>
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

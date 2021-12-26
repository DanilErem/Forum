import './App.css';
import React from "react";
import store from "./store/store";
import Chats from "./Component/Chats/Chats";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Regestration from "./Component/Regestration/Regestration";
import Navbar from "./Component/Navbar/Navbar";
function App() {
  return (
      <BrowserRouter location={""} navigator={""} history={""}>
          <div className="App">
               <Routes>
                  <Route  path={"/"} element={<Regestration dispatch={store.dispatch} state={store.getState().registrationPage}/>}/>
                   <Route path={"/chats"} element={<div><Navbar/><Chats dispatch={store.dispatch} chatPage={store.getState().chatsPage}/></div>}/>
               </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;

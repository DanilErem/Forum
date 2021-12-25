import './App.css';
import Regestration from "./Component/Regestration/Regestration";
import React from "react";
import store from "./store/store";
import Navbar from "./Component/Navbar/Navbar";
import Chats from "./Component/Chats/Chats";
import {Route, Routes} from "react-router";
function App() {
  return (

    <div className="App">
      {/*<Regestration dispatch={store.dispatch} state={store.getState().registrationPage}/>*/}
      <Navbar/>
      <Chats chatePage={store.getState().chatsPage} dispatch={store.dispatch}/>
    </div>
  );
}

export default App;

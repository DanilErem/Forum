import './App.css';
import Regestration from "./Regestration/Regestration";
import React from "react";
import store from "./store/store";
function App() {
  return (
    <div className="App">
      <Regestration dispatch={store.dispatch} state={store.getState().registrationPage}/>
    </div>
  );
}

export default App;

import './App.css';
import Regestration from "./Regestration/Regestration";
import React from "react";
import store from "./store/store";
import Navbar from "./Navbar/Navbar";
function App() {
  return (
    <div className="App">
      {/*<Regestration dispatch={store.dispatch} state={store.getState().registrationPage}/>*/}
      <Navbar/>
    </div>
  );
}

export default App;

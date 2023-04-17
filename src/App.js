import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import { HomePage, Error404 } from './Containers/index/index';
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={ <HomePage/> }/>
          <Route element={ Error404 }/>
        </Routes>
    </div>
  )
}

export default App;

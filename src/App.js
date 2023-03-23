import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, Error404 } from './Containers/index/index';
import "./styles/App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <Routes>
            <Route exact path='/' component={ HomePage } />
            <Route component={ Error404 } />
          </Routes>
      </div>
      </>
    );
  }
}
export default App;

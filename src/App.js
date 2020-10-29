import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage, Error404 } from './Containers/index/index';
import "./styles/App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <h1>New React App</h1>
          <h2>Happy Coding</h2>

          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route component={ Error404 } />
          </Switch>
      </div>
      </>
    );
  }
}
export default App;

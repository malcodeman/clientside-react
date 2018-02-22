import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Connect from "./Connect/Connect";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Connect} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

export default App;

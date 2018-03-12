import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Welcome from "./Welcome/Welcome";
import Products from "./Products/Products";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/products" component={Products} />
        <Route path="/profile" component={Profile} />
      </Switch>
    );
  }
}

export default App;

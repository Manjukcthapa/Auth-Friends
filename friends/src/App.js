import React, { Component } from "react";
import Login from "./components/Login";
import FriendsList from './components/FriendsList'
import { Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/friendslist">Friends</Link>
        <Route path="/login" component={Login} />
        <Route path = "/friendslist" component={FriendsList}/>
      </div>
    );
  }
}

export default App;

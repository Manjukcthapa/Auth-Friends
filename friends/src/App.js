import React, { Component } from "react";
import Login from "./components/Login";
import FriendsList from './components/FriendsList'
import { Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
        <Link to="/login"><a>Login</a></Link>
        <Link to="/friendslist"><a>Friends</a></Link>
        </nav>

        <Route path="/login" component={Login} />
        <PrivateRoute path="/friendslist" component={props => <FriendsList />} />
      </div>
    );
  }
}

export default App;

import React, { useState } from "react";
import axios from "axios";
import "./friends.css";

const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friendslist");
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  };

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login">
      <form className='login-Form' onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
        />

        <input
          className="input"
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default Login;

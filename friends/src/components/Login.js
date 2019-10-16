import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className='maindiv'> 
        <div>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        </div>
        <button className="button">Submit</button>
        </div>
      </form>
    </div>
  
  );
};

export default Login;

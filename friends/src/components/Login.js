import React, {useState} from "react";

const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
      e.preventDefault();
      console.log(user);
  }

  const handleChange = e => {
      setUser({
          ...user,
          [e.target.name]:e.target.value
      })

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { email, password } = user;
    console.log(email, password);
    setUser({ email: "", password: "" });
    if (email && password) {
      axios.post("http://localhost:5000/login", user).then((response) => {
        alert(response.data.message);
      });
    }
  };

  return (
    <div className="login">
      <h1>Login page</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter Your Email..."
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Passwords..."
      />
      <button className="button" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;

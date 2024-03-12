import React, { useState } from "react";
import "./login.css";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { database } from "./firbaseConfig.js";

import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {

  const navigate = useNavigate("");

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleInputPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(database, email, password)
      .then((data) => {
        navigate("/home");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  const handleClickLink = () => {
    navigate("/SignUp");
  };

  return (
    <div className="singUpMain">
      <h2>Log-In</h2>
      <form onSubmit={handleSubmit} className="input-from">
        <input
          onChange={handleInputEmail}
          name="mail"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handleInputPassword}
          type="Password"
          name="pwd"
          placeholder="Password"
        />
        <button type="submit">Log-In</button>
      </form>

      <p>
        create New account?{" "}
        <a onClick={handleClickLink}>
          <strong>SignUp</strong>
        </a>
      </p>
    </div>
  );
}

export default Login;

import React from "react";
import { useState } from "react";
import Login from "./Login.js";
import Home from "./Home.js";
import { Routes, Route } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const form = document.querySelector("form");
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [ConfrimPassword, setConfrimPassword] = useState(" ");

  const handleInputName = (event) => {
    setName(event.target.value);
  };
  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleInputPassword = (event) => {
    setPassword(event.target.value);
  };
  const handleInputCPassword = (event) => {
    setConfrimPassword(event.target.value);
  };






  const handleSubmit = (ev) => {
    if (ConfrimPassword === password) {
      form.reset();
      alert("Form Submited!!!!");
    } else {
      ev.preventDefault();
      alert("Password Not Matched!!!!!!");
    }
  };







  
  const showData = (e) => {
    console.log(name, email, password, ConfrimPassword);
  };
  return (
    <div className="singUpMain">
      <h2>Sign Up</h2>
      <p>Create youre account</p>
      <form className="input-from" onSubmit={handleSubmit}>
        <input onChange={handleInputName} type="text" placeholder="UserName" />
        <input onChange={handleInputEmail} type="Email" placeholder="Email" />
        <input
          onChange={handleInputPassword}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={handleInputCPassword}
          type="password"
          placeholder="Confrim Password"
        />
        <button onClick={showData} type="submit">
          Sign Up
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <a href="#">
          <strong>Login</strong>
        </a>
      </p>
    </div>
  );
}

export default SignUp;

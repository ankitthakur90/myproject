import React from "react";
import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { database } from "./firbaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const navigate = useNavigate("");
  const history = useNavigate("");
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
    ev.preventDefault();
    if (name === "" || email === "" || password === " ") {
      alert("enter the Value");
    } else if (ConfrimPassword === password) {
      createUserWithEmailAndPassword(database, email, password).then((data) => {
        console.log(data, "authdata");
        history("/home");
        form.reset();
      }).catch((err) => {
        alert(err.code);
      });
    } else {
      alert("Password Not Matched!!!!!!");
    }
  };

  const handleLink = () => {
    navigate("/");
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
        <a onClick={handleLink}>
          <strong>Login</strong>
        </a>
      </p>
    </div>
  );
}

export default SignUp;

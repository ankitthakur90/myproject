import React, { useState } from "react";
import "./login.css";
// import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ mail: " ", pwd: " " });

  // const naviate = useNavigate();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.mail == "at@gmail.com" && data.pwd == "123") {
      alert('hlo...')
    } else {
      alert("Error 404");
    }
  };

  return (
    <div className="singUpMain">
      <h2>Log-In</h2>
      <form onSubmit={handleSubmit} className="input-from">
        <input
          onChange={handleInput}
          name="mail"
          type="mail"
          placeholder="Email"
        />
        <input
          onChange={handleInput}
          type="pwd"
          name="pwd"
          placeholder="Password"
        />
        <button type="submit">Log-In</button>
      </form>

      <p>
        create New account?{" "}
        <a href="#">
          <strong>SignUp</strong>
        </a>
      </p>
    </div>
  );
}

export default Login;

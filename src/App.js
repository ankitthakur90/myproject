import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login.js";
import Home from "./Home.js";
import SignUp from "./SignUp.js";
// import SignUp from "./SignUp.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

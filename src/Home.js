import React from "react";
import { signOut } from "firebase/auth";
import { database } from "./firbaseConfig";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate("");

  const hadleSignOut = () => {
    signOut(database).then((val) => {
      // console.log(val, "value");
      navigate("/SignUp");
    });
  };

  return (
    <>
      <div className="main">
        <button onClick={hadleSignOut}>SignOut</button>
      </div>
    </>
  );
}

export default Home;

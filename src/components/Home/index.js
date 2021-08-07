import React from "react";
import "./home.css";

const Homepage = () => {
  return (
    <div className="homePage">
      <h1 className="homeTitle">Welcome Back, Ramesh</h1>
      <h2 className="homeSubTitle">Your Details are as follows</h2>
      <div className="userDetails">
        <p className="homeDetails">Name : Ramesh Gupta</p>
        <p className="homeDetails">Email : rameshgupta@gmail.com</p>
        <p className="homeDetails">Name : rameshgupta</p>
      </div>
      <button className="homeButton">Logout</button>
    </div>
  );
};

export default Homepage;

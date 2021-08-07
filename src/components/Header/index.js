import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/home">LOGO</Link>
      </h1>
    </div>
  );
};

export default index;

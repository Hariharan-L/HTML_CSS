import React from "react";
import "../external.css";
import {Link} from "react-router-dom";
export const Navbar=()=>{
  return(
    <div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/login">login</Link></li>
      </ul>
    </div>
  )
}
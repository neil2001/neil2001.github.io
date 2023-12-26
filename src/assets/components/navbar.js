import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="sidebar">
      <div className="container">
      <img className="portrait" src={require('../images/portrait.jpeg')}></img>
        
      <div className="name">
      <a href="/">
      <h1>Neil Xu</h1>
      </a>
      <h2>Applied Math + CS @ Brown</h2>
      </div>
    <ul className="nav">
      <li><a href="#about">About</a></li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
    </ul>
    <div className="footer">
      <a href="https://github.com/neil2001" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-lg"></i>
      </a>
      <a href="https://www.linkedin.com/in/neil-xu-2401/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin fa-lg"></i>
      </a>
      <a href="mailto:neil_xu@brown.edu">
        <i className="fas fa-envelope fa-lg"></i>
      </a>
    </div>
    </div>
  </div>
  );
};

export default NavBar;

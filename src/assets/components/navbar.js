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
      <h2>Software Engineer</h2>
      </div>
    <ul className="nav">
      <li><a href="#introduction">About</a></li>
      <li>
        <a href="#history-and-construction">Experience</a>
      </li>
      <li>
        <a href="#second-opium-war">Projects</a>
      </li>
    </ul>
    <div className="footer">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-lg"></i>
      </a>
      <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin fa-lg"></i>
      </a>
      <a href="mailto:you@example.com">
        <i className="fas fa-envelope fa-lg"></i>
      </a>
    </div>
    </div>
  </div>
  );
};

export default NavBar;

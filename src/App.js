import React from "react";
import './App.css';
import NavBar from "./assets/components/navbar";
import Section from "./assets/components/section";
import Glow from "./assets/components/glow";

function App() {
  return (
    <div className="all">
        <Glow />
      <div className="wrapper">
        <NavBar />
        <Section />
      </div>
    </div>
    
  );
}

export default App;

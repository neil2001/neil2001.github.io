import React, { useState, useEffect} from "react";
import "./glow.css";

const radius = 400;

const Glow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
    
    return (
      <>
        <div className="glowing-orb" style={{ transform: `translate(${position.x-radius}px, ${position.y-radius}px)` }} />
      </>
    );
  };
  
  export default Glow;
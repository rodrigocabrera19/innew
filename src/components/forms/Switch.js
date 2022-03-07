import React from "react";
import './Switch.css';

const Switch = ({ handleChange }) => {
  return (
    <div className="switch-container">
      <p>CONTACTO</p>
      <label class="switch">
        <input type="checkbox" onChange={() => handleChange()} />
        <span class="slider round"></span>
      </label>
      <p>SUMATE</p>
    </div>
  );
};

export default Switch;

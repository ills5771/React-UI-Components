import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <div>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="red-button">÷</button>
    </div>
  );
};
export default NumberButton;

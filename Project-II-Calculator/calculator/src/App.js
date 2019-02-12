import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <ActionButton text="clear" />
      <NumberButton buttonStyle="red-button" text="÷" />
      <NumberButton buttonStyle="number-button" text="7" />
      <NumberButton buttonStyle="number-button" text="8" />
      <NumberButton buttonStyle="number-button" text="9" />
      <NumberButton buttonStyle="red-button" text="x" />
      <NumberButton buttonStyle="number-button" text="4" />
      <NumberButton buttonStyle="number-button" text="5" />
      <NumberButton buttonStyle="number-button" text="6" />
      <NumberButton buttonStyle="red-button" text="-" />
      <NumberButton buttonStyle="number-button" text="1" />
      <NumberButton buttonStyle="number-button" text="2" />
      <NumberButton buttonStyle="number-button" text="3" />
      <NumberButton buttonStyle="red-button" text="+" />
      <ActionButton text="0" />
      <NumberButton buttonStyle="red-button" text="=" />
    </div>
  );
};

export default App;

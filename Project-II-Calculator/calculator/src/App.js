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
      <NumberButton />
    </div>
  );
};

export default App;

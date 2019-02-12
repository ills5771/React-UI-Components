import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <NumberButton />
    </div>
  );
};

export default App;

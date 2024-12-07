import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prevState) => prevState + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (err) {
      setResult("");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };
  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        <button
          className="number"
          onClick={() => {
            handleClick("1");
          }}
        >
          1
        </button>
        <button
          className="number"
          onClick={() => {
            handleClick("2");
          }}
        >
          2
        </button>
        <button
          className="number"
          onClick={() => {
            handleClick("3");
          }}
        >
          3
        </button>
        <button
          className="operator"
          onClick={() => {
            handleClick("+");
          }}
        >
          +
        </button>

        <button
          className="number"
          onClick={() => {
            handleClick("4");
          }}
        >
          4
        </button>
        <button
          className="number"
          onClick={() => {
            handleClick("5");
          }}
        >
          5
        </button>
        <button
          className="number"
          onClick={() => {
            handleClick("6");
          }}
        >
          6
        </button>
        <button
          className="operator"
          onClick={() => {
            handleClick("-");
          }}
        >
          -
        </button>

        <button
          className="number"
          onClick={() => {
            handleClick("7");
          }}
        >
          7
        </button>
        <button
          className="number"
          onClick={() => {
            handleClick("8");
          }}
        >
          8
        </button>
        <button
          className="number"
          onClick={() => {
            handleClick("9");
          }}
        >
          9
        </button>
        <button
          className="operator"
          onClick={() => {
            handleClick("*");
          }}
        >
          x
        </button>
        <button
          className="number"
          onClick={() => {
            handleClick("0");
          }}
        >
          0
        </button>
        <button
          className="number"
          onClick={() => {
            handleClick(".");
          }}
        >
          .
        </button>

        <button className="equals" onClick={handleCalculate}>
          =
        </button>
        <button
          className="operator"
          onClick={() => {
            handleClick("/");
          }}
        >
          /
        </button>

        <button className="clear" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;

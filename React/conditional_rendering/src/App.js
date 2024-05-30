import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  // use if-else to return from curretn function it will re-render every time value is updated
  // if (inputValue % 2 === 0) {
  //   return (
  //     <div>
  //       <input
  //         id="conditionalRender"
  //         onChange={handleChange}
  //         placeholder={"Enter any number"}
  //       ></input>
  //       <p>{inputValue}</p>
  //     </div>
  //   );
  // } else {
  //   <p>else part</p>;
  // }

  return (
    <div className="App">
      <p>
        You can’t use if-else statement or any other statement directly inside
        JSX, only expressions are allowed.
      </p>
      <p>if-else and switch-case can't be used inside jsx!</p>
      <input
        id="conditionalRender"
        onChange={handleChange}
        placeholder={"Enter any number"}
      ></input>
      <p>{inputValue}</p>
      <u>ternary expression</u>
      <p>If value is even true is present else false is printed.</p>
      {inputValue % 2 === 0 ? <h4>true</h4> : <h4>false</h4>}
      <u>&& operator expression</u>
      <p>If value is even true is present</p>
      {inputValue % 2 === 0 && <h4>true</h4>}
    </div>
  );
}

export default App;

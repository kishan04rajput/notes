import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [array, setArray] = useState([1, 2, 3]);
  useEffect(() => {
    // setArray((prevArray) => [...prevArray, 4]);
    setArray([...array, 4]);
  }, []);

  const isEven = (num) => num % 2 === 0;

  return (
    <div>
      {/* Destructuring Example */}
      <h1>Destructuring Example</h1>
      const &#123; name:newName, password &#125; = req.body;
      {/* Spreading operator */}
      <h1>Spreading operator</h1>
      setArray([...array, 4]);
      {/* Map Function */}
      <h1>Map Function Example</h1>
      <p>array.map(()=&gt;())</p>
      {array.map((element, index) => (
        <p key={index}>
          {element},{index}
        </p>
      ))}
      {/* Filter function */}
      <h1>Filter Function Example</h1>
      <p>array.filter()</p>
      {array.filter(isEven).join(",")}
      {/* Reduce Function */}
      <h1>Reduce Function Example</h1>
      <p>
        The reduce() method reduces an array to a single value by calling a
        callback function in every item of the existing array
      </p>
      <p>
        array.reduce(function(accumulator, currentValue, currentIndex, array),
        initialValue)
      </p>
      {array.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      )}
      {/* Ternary Operator */}
      <h1>Ternary Operator</h1>
      <p>condition ? (if true then do this) : (if false then do this);</p>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

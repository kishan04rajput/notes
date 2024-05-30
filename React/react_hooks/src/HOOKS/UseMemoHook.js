import React, { useEffect, useMemo, useState } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const UseMemoHook = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(() => {
    return expensiveCalculation(add);
  }, [add]);

  // const [multiplication, setMultiplication] = useState(10);
  // useEffect(() => {
  //   setMultiplication(expensiveCalculation(add));
  //   <p>this is multiplication</p>;
  // }, []);

  return (
    <div>
      <h4>useMemo hook</h4>
      <p>
        The useMemo is a built-in hook in React that allows you to cache the
        result of a calculation between re-renders. It’s primarily used to
        optimize performance by preventing unnecessary recalculations when
        unrelated state changes. It run at the time of rendering.
      </p>
      <p>Multiply {multiplication}</p>
      <button onClick={() => setAdd(add + 1)}>ADD</button> {add} <br></br>
      <button onClick={() => setMinus(minus - 1)}>Minus</button> {minus}
    </div>
  );
};

export default UseMemoHook;

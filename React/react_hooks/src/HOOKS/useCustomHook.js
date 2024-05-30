// https://youtu.be/Vs43P8zcRr4

import { useState } from "react";

const useCounterHook = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev) => {
      return prev + 1;
    });
  }

  function handleDecrement() {
    setCount((prev) => {
      return prev - 1;
    });
  }

  return [count, handleIncrement, handleDecrement];
};

export default useCounterHook;

import React, { useEffect, useState } from "react";
import PChild from "./pChild";

export default function PParent() {
  console.log("----->     Parent Parameter is rendered!");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <PChild seconds={seconds} />;
}

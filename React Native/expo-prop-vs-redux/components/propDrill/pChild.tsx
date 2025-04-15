import React from "react";
import PGrandChild from "./pGrandChild";

export default function PChild({ seconds }: { seconds: number }) {
  console.log("----->     Child Parameter is rendered!");
  return <PGrandChild seconds={seconds} />;
}

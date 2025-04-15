import React from "react";
import PGreatGrandChild from "./pGreatGrandChild";

export default function PGrandChild({ seconds }: { seconds: number }) {
  console.log("----->     GrandChild Parameter is rendered!");
  return <PGreatGrandChild seconds={seconds} />;
}

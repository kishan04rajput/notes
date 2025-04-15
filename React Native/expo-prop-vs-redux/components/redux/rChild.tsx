import React from "react";
import RGrandChild from "./rGrandChild";

export default function RChild() {
  console.log("Child Redux is rendered!");
  return <RGrandChild />;
}

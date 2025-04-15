import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../store/secondsSlice";
import RChild from "./rChild";

export default function RParent() {
  console.log("Parent Redux is rendered!");
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => dispatch(increment()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <RChild />;
}

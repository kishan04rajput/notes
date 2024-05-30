import React, { useEffect } from "react";

const FunctionComponent = ({ prop: nameChanged, fun }) => {
  useEffect(() => {
    fun("this is prop from function child!");
  }, []);
  return <div>This is a functoinal component, {nameChanged}</div>;
};

export default FunctionComponent;

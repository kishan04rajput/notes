import logo from "./logo.svg";
import "./App.css";
import FunctionComponent from "./Component/FunctionComponent";
import ClassComponent from "./Component/ClassComponent";
import { useEffect, useState } from "react";

function App() {
  // passing prop
  const [propToFunctionChild, setPropToFunctionChild] = useState("");
  const [propFromFunctionChild, setPropFromFunctionChild] = useState("");

  const [propToClassChild, setPropToClassChild] = useState("");
  const [propFromClassChild, setPropFromClassChild] = useState("");

  useEffect(() => {
    setPropToFunctionChild("This is prop to function child");
    setPropToClassChild("This is prop to class child");
  }, []);

  const propFromChildFun = (childValue) => {
    setPropFromFunctionChild(childValue);
  };

  const propFromClassChildFun = (childValue) => {
    setPropFromClassChild(childValue);
  };

  return (
    <div>
      {<FunctionComponent prop={propToFunctionChild} fun={propFromChildFun} />}
      propFromChild={propFromFunctionChild}
      <br></br>
      <br></br>
      {<ClassComponent prop={propToClassChild} fun={propFromClassChildFun} />}
      propFromClassChild={propFromClassChild}
    </div>
  );
}

export default App;

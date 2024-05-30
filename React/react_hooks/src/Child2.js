import { useContext } from "react";
import { FN, LN } from "./App";

const Child2 = () => {
  const FirstName = useContext(FN);
  const LastName = useContext(LN);
  return (
    <div>
      {/* This is child 2! */}
      {FirstName} {LastName}
    </div>
  );
};

export default Child2;

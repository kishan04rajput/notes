import "./App.css";
import React, { createContext } from "react";
import { ChildA } from "./childA";
const firstName = "Kishan";
const lastName = "Rajput";
const FN = createContext();
const LN = createContext();

function App() {
  return (
    <div>
      This is parent!
      <FN.Provider value={firstName}>
        <LN.Provider value={lastName}>
          <ChildA />
        </LN.Provider>
      </FN.Provider>
    </div>
  );
}

export default App;
export { FN, LN };

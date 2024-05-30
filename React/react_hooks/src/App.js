import "./App.css";
import React, { createContext, useEffect, useRef, useState } from "react";
import Child1 from "./Child1";
import UseReducerHook from "./HOOKS/UseReducerHook";
import UseMemoHook from "./HOOKS/UseMemoHook";
import UseCallbackHook from "./HOOKS/UseCallbackHook";
import useCounterHook from "./HOOKS/useCustomHook";

//useContext
// Step1: createContext;
// Step2: provideContext;
// Step3: Export variables;
// Step4: Import variables;
// Step5: useContext;
const FN = createContext();
const LN = createContext();

function App() {
  // useState hook
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // useEffect hook
  useEffect(() => {
    setFirstName("Kishan");
    setLastName("Rajput");
  }, []);

  //useRef hook
  const refElement = useRef();

  // custom hook
  const [count, INCREMENT, DECREMENT] = useCounterHook();

  return (
    <div>
      <p>
        Hooks are functions that allow functional components to access and
        manipulate React state and lifecycle features without needing to write a
        class component.
      </p>
      {/* {firstName} {lastName} */}
      <p>
        useState is a React Hook that allows to add state variables in
        functional components.
      </p>
      <p>
        useContext is a built-in Hook in React that allows to consume data from
        a context provider. useContext provides a way to consume context
        directly from your functional components without having to wrap them
        with the Context Consumer Component.
      </p>
      <FN.Provider value={firstName}>
        <LN.Provider value={lastName}>
          <Child1 />
        </LN.Provider>
      </FN.Provider>
      <p>
        <u>
          <b>useRef</b>
        </u>
      </p>
      <p>
        The useRef is a built-in hook in React that allows you to persist values
        between renders. It’s primarily used to access DOM elements directly and
        store mutable values that do not cause a re-render when updated. It
        returns an object with current key.
      </p>
      <input
        ref={refElement}
        type="text"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          refElement.current.value = "";
          refElement.current.focus();
        }}
      >
        Reset
      </button>

      {/* <h4>useReducer hook</h4> */}
      {/* <UseReducerHook /> */}

      {/* useMemo hook */}
      {/* <UseMemoHook /> */}

      {/* useCallback hook */}
      {/* <UseCallbackHook /> */}

      {/* custom Hook */}
      <h4>useCustomHook</h4>
      <button onClick={INCREMENT}>INCREMENT</button>
      {count}
      <button onClick={DECREMENT}>DECREMENT</button>
    </div>
  );
}

export default App;
export { FN, LN };

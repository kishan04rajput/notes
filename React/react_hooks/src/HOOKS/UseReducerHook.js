// step1:define initialState
// step2:define reducer(state, action)
// step3:define useReducer(reducer, initialState)
// step4:use state value where needed
// step5:call dispatch to update value of state with action

import React, { useReducer, useState } from "react";

const UseReducerHook = () => {
  const [initialState, setInitialState] = useState(0);

  const reducer = (state, action) => {
    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>useReducer hook</h4>
      <p>
        The useReducer is a built-in hook in React that provides an alternative
        to the useState hook. It’s used when the state of a component is complex
        and requires more than one state variable.
      </p>
      <button onClick={() => dispatch("INCREMENT")}>INCREMENT</button>
      {state}
      <button onClick={() => dispatch("DECREMENT")}>DECREMENT</button>
    </div>
  );
};

export default UseReducerHook;

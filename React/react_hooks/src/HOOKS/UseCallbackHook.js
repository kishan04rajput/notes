import { useCallback } from "react";

const UseCallbackHook = () => {
  const memoizedFun = useCallback(() => {
    console.log("useCallBackFun!");
  }, []);

  return (
    <div>
      <h4>THis is UseCallbackHook!</h4>
      <p>
        The useCallback hook in React is used to memoize a callback function,
        preventing it from being recreated on every render unless its
        dependencies change.
      </p>
      <p>
        For more info watch this{" "}
        <a href="https://youtu.be/5zempLONkxM" target="_blank" rel="noreferrer">
          video.
        </a>
      </p>
      {memoizedFun()}
    </div>
  );
};

export default UseCallbackHook;

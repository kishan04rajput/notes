import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

const Counter = () => {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <br />
            <br />
            {value}
            <br />
            <br />
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default Counter;

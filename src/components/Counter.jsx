import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/slices/counterSlice";


const Counter = () => {
  const countValue = useSelector((state) => state.count.countValue);
  const dispatch = useDispatch();

  const decrementHandler = () => {
    if(countValue < 1){
        return
    }
    dispatch(decrement())
  }

  return (
    <div>
      <h2>Count = {countValue}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;

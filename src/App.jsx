import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counter/countReducer";

const App = () => {
  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState(0);
  const { value } = useSelector((state) => state);
  return (
    <div>
      <div className="flex items-center justify-center h-screen flex-col">
        <div className="flex flex-col gap-y-4">
          <input
            type="number"
            className="py-2 px-2 border border-gray-400 rounded outline-none"
            placeholder="Type here...."
            onChange={(e) => setinputValue(e.target.value)}
          />
          <span className="text-3xl flex justify-center"> {value} </span>
          <div className="flex items-center justify-center gap-x-4">
            <button
              className="px-2 py-3 bg-green-500 rounded-[5px] text-white text-[20px] cursor-pointer"
              onClick={() => dispatch(increment(parseInt(inputValue)))}
            >
              Increment
            </button>
            <button
              className="px-2 py-3 bg-gray-500 rounded-[5px] text-white text-[20px] cursor-pointer"
              onClick={() => dispatch(decrement(parseInt(inputValue)))}
            >
              Decrement
            </button>
            <button
              className="px-2 py-3 bg-red-500 rounded-[5px] text-white text-[20px] cursor-pointer"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

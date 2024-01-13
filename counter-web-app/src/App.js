import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="flex flex-col justify-center items-center rounded-lg p-4 bg-red-500 ">
        <h1 className="text-5xl p-12 text-white font-bold">{value}</h1>
        <div className="flex flex-row justify-between p-2">
          <button className="p-2 bg-white border-2 mx-4 rounded-md" onClick={increment}>
            Increment
          </button>
          <button className="p-2 bg-white border-2 mx-4 rounded-md" onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import logo from "./assets/instagram.png";

function App() {
  const [login, setLogin] = useState(false);

  const toggle = () => {
    setLogin(!login);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center border-2 items-center shadow-xl">
        <img src={logo} alt="" className="m-6" />
        <input
          hidden={login}
          type="text"
          placeholder="Mobile number or email"
          className="border-2 border-gray-200 focus:outline-none text-md p-2 w-[85%] bg-gray-100"
        />
        <input
          hidden={login}
          type="text"
          placeholder="Full name"
          className="border-2 border-gray-200 focus:outline-none text-md p-2 w-[85%] my-2 bg-gray-100"
        />
        <input
          type="text"
          placeholder="Phone number, username or email"
          className="border-2 border-gray-200 focus:outline-none text-md p-2 w-[85%] mb-2 bg-gray-100"
        />
        <input
          type="text"
          placeholder="Password"
          className="border-2 border-gray-200 focus:outline-none text-md p-2 w-[85%] mb-4 bg-gray-100"
        />
        <button
          className="border-2 p-2 w-[85%] rounded-md bg-blue-500 text-white font-bold mb-2"
          onClick={() => setLogin(!login)}
        >
          {login ? "Sign In" : " Sign Up"}
        </button>

        <div className="flex flex-row justify-between mt-4 mb-6">
          {" "}
          {login ? "Don't have account?" : "Have an account?"}{" "}
          <span className="px-4 text-blue-500 cursor-pointer font-semibold" onClick={toggle}>
            {login ? "Sign up" : "Sign In"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;

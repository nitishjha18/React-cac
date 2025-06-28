import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(15);

  const addValue = () => {
    setcounter((prevcounter) => Math.min(prevcounter + 1, 20));
  };

  const removeValue = () => {
    setcounter((prevcounter) => Math.max(prevcounter - 1, 0));
  };

  // add value not more than 20 and remove value should be less than 0

  return (
    <>
      <h1>Hello counter</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}> Add value </button>

      <br />

      <button onClick={removeValue}>Remove value </button>
    </>
  );
}

export default App;

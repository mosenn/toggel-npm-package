import { useState } from "react";
import { Toggel } from "./package";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const [act, setAct] = Toggel();
  console.log(act);
  const changeToggel = () => {
    setAct(!act);
  };
  return (
    <div>
      <h1>hi react</h1>
      <h2>{`${act}`}</h2>
      <button onClick={changeToggel}>toggel</button>
    </div>
  );
}

export default App;

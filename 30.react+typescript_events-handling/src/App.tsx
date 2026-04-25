import React, { useState } from "react";
import Counter from "./components/Counter";
import Forms from "./components/Forms";

function App() {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClickCount((prevCount) => prevCount + 1);
  };

  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <button onClick={handleClick}>click me</button>
      <p>button clicked {clickCount} times</p>
      <input type="text" value={inputValue} onChange={handleInput} />
      <p>Typed: {inputValue}</p>
      <Forms />
      <Counter />
    </>
  );
}

export default App;

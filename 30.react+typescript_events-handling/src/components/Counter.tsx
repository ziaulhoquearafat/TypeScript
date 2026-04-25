import { useRef } from "react";

const Counter = () => {
  const ref = useRef<number>(0);
  console.log(ref);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert(`You Clicked ${ref.current} Times!`);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Counter;

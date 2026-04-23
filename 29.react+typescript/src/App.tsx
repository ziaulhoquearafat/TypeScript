import { useEffect, useState } from "react";
import Greetings from "./components/Greetings";

function App() {
  const name = "Hablu";
  const age = 48;

  const [count, setCount] = useState<number>(0);

  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );

  useEffect(() => {
    setUser({
      name: "Alice",
      email: "alice@gmail.com",
    });
  }, []);

  return (
    <>
      <h1>Welcome to React + TypeScript</h1>
      <Greetings name={name} age={age} />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      {user && (
        <p>
          User: {user.name} - {user.email}
        </p>
      )}
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import Forms from "./components/Forms";
import { fetchUsers } from "./services/userServices";
import type { User } from "./types/user";

function App() {
  const [clickCount, setClickCount] = useState<number>(0);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClickCount((prevCount) => prevCount + 1);
  };
  const [inputValue, setInputValue] = useState<string>("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // ----------------User Data Fatching------------------------

  // ! Step - 1
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // ! Step - 2

  useEffect(() => {
    // ? step - 1
    const loadUsers = async () => {
      try {
        const response = await fetchUsers();
        console.log(response);
        if (response.status === 200) {
          setUsers(response.data);
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occoured");
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  // ----------------End of User Data Fatching ----------------

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <button onClick={handleClick}>click me</button>
      <p>button clicked {clickCount} times</p>
      <input type="text" value={inputValue} onChange={handleInput} />
      <p>Typed: {inputValue}</p>
      <Forms />
      <Counter />
      // TODO data fatching
      <div className="m-2">
        <h2>All Users</h2>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

import Greetings from "./components/Greetings";

function App() {
  const name = "Hablu";
  const age = 48;

  return (
    <>
      <h1>Welcome to React + TypeScript</h1>
      <Greetings name={name} age={age} />
    </>
  );
}

export default App;

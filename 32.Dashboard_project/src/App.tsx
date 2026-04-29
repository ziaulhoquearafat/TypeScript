import Users from "./components/Users";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-center text-2xl font-bold">User Dashboard</h1>
        <Users />
      </div>
    </div>
  );
}

export default App;

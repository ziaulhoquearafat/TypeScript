import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState<string>("");
  console.log(newTodo);

  return (
    <div className="min-h-screen bg-gray-300 py-5">
      <div className="max-w-md mx-auto py-2">
        <h1 className="font-bold text-2xl text-center">Todo App</h1>
        <form className="pb-3">
          <div className="flex gap-2 mt-3 items-center justify-center">
            <input
              type="text"
              placeholder="Add new Todo..."
              className="border py-2 rounded px-3 flex-1 focus:outline-0 ring-1"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 cursor-pointer rounded"
            >
              Add
            </button>
          </div>
        </form>
        {/*  display todo items */}
        <div>Todo List</div>
      </div>
    </div>
  );
}

export default App;

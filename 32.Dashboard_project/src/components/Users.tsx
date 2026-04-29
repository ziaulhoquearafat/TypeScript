import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import type { User } from "../types/user";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getUsers();
        setUsers(data);
        setError(null);
      } catch (error) {
        setError(`Failed to Fetch Data`);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="animate-spin rounded-full h-20 w-20 border-gray-950 border-b-2"></div>
      </div>
    );

  if (error)
    return (
      <div className="bg-red-300 border p-4 text-red-800 mt-10">
        <strong className="font-bold">Error: </strong>
        <span>{error}</span>
      </div>
    );

  return (
    <div>
      {/* User */}
      <div className=" shadow rounded-lg overflow-hidden my-4">
        <div className="p-4 sm:p-6">
          <h2 className="font-bold text-lg text-gray-900">Users</h2>

          <div className="my-4 divide-gray-700 divide-y">
            {users.map((user) => (
              <ul key={user.id}>
                <li>
                  <div className="flex justify-between items-center">
                    <div className="flex-1 py-1.5">
                      <p className="text-sm font-bold text-indigo-500">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-600 truncate">
                        {user.email}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-iline text-indigo-950 bg-indigo-300 px-3 py-2 rounded font-bold cursor-pointer text-sm">
                        Update
                      </button>
                      <button className="flex-iline text-red-950 bg-red-300 px-3 py-2 rounded font-bold cursor-pointer text-sm">
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

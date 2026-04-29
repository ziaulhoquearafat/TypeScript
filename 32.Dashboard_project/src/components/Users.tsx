import { useEffect, useState } from "react";
import { getUsers } from "../services/user";
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
        setError("Failed to Fetch Users");
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

  return <div>Users</div>;
};

export default Users;

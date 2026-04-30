import { useState, type Dispatch, type SetStateAction } from "react";
import { createUser } from "../services/api";
import type { User } from "../types/user";

interface AddUserProp {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
}

const AddUser = ({ users, setUsers }: AddUserProp) => {
  const [newUsers, setNewUsers] = useState<Omit<User, "id">>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  console.log(newUsers);

  const handleAddUser = async () => {
    const createdUser = await createUser(newUsers);
    setUsers([...users, createdUser]);
    setNewUsers({
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    });
  };

  return (
    <div className="mt-4 mb-6">
      {/* add user form */}
      <div className="px-4 shadow py-6 rounded">
        <div>
          <h2 className="font-medium text-lg text-gray-900">Add New User</h2>
          <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2">
            <input
              type="text"
              className="block w-full h-10 border rounded border-gray-300 shadow-sm px-2 text-sm"
              placeholder="Name"
              value={newUsers.name}
              onChange={(e) =>
                setNewUsers({ ...newUsers, name: e.target.value })
              }
            />
            <input
              type="text"
              className="block w-full h-10 border rounded border-gray-300 shadow-sm p-2 text-sm"
              placeholder="username"
              value={newUsers.username}
              onChange={(e) =>
                setNewUsers({
                  ...newUsers,
                  username: e.target.value,
                })
              }
            />
            <input
              type="email"
              className="block w-full h-10 border rounded border-gray-300 shadow-sm p-2 text-sm"
              placeholder="email"
              value={newUsers.email}
              onChange={(e) =>
                setNewUsers({ ...newUsers, email: e.target.value })
              }
            />
          </div>
          <div>
            <button
              onClick={handleAddUser}
              className="text-sm px-3 py-2 bg-indigo-500 hover:bg-indigo-800 text-white font-medium cursor-pointer rounded shadow-sm"
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

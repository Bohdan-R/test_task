import { useState } from "react";
import { User } from "../types";
import { mockUsers } from "../mockData";

const sortedInitialUsers = mockUsers.sort((a, b) =>
  a.name.localeCompare(b.name)
);

export default function Users() {
  const [users, setUsers] = useState<User[]>(sortedInitialUsers);
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = () => {
    const sorted = users.sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setUsers(sorted);
    setSortAsc(!sortAsc);
  };

  return (
    <div>
      <div className="grid grid-cols-3 font-semibold border-b py-2">
        <button onClick={handleSort} className="text-left pl-2">
          Name {sortAsc ? "▼" : "▲"}
        </button>
        <div className="pl-2">Email</div>
        <div className="pl-2">Age</div>
      </div>

      {users.map((user) => {
        const { id, name, email, age } = user;
        return (
          <div
            key={id}
            className="grid grid-cols-3 py-2 text-sm even:bg-[#212e49]"
          >
            <div className="pl-2">{name}</div>
            <div className="pl-2">{email}</div>
            <div className="pl-2">{age}</div>
          </div>
        );
      })}
    </div>
  );
}

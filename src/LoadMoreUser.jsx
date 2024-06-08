import { useState } from "react";
import { userData } from "./data.js";

const LoadMoreUser = () => {
  const [users, setUsers] = useState(userData.slice(0, 5));
  const usersPerPage = 5;
  const currentLength = users.length;
  const nextChunk = userData.slice(currentLength, currentLength + usersPerPage);

  const loadMoreUser = () => {
    setUsers([...users, ...nextChunk]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Load More User Data On clicking Next Button</h2>
      <ul>
        {users.map((user) => (
          <li style={{ listStyle: "none" }} key={user?.id}>
            {user?.name}
          </li>
        ))}
      </ul>
      <button
        onClick={() => loadMoreUser()}
        disabled={currentLength === userData.length}
      >
        Load More user
      </button>
    </div>
  );
};
export default LoadMoreUser;

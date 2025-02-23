import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    axios
      .get("https://mongodb-atlas-backend.onrender.com/users")
      .then((response) => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
      <div>
        <h2>Registered Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
  );
}

export default Users;

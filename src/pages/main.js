import React, { useState, useEffect, useContext } from "react";
import api from "../service/api";
import { Context } from "../context/AuthContext";
import NavBar from '../components/NavBar';

export default function Users() {

  const [users,setUsers] = useState([]);
  const {handleLogout} = useContext(Context);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/api/auth/users");
      console.log(data);
      setUsers(data)
    })();
  }, []);

  return (
    <>
      <NavBar/>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.name} ({user.website})</li>
        ))}
      </ul>

      <button type="button" onClick={handleLogout}>Sair</button>
    </>
  );
}

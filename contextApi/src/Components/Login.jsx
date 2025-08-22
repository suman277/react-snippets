import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/userContext";

export const Login = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    console.log(username, password);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>Login</button>
    </>
  );
};

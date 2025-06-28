// src/routes/auth/Login.jsx
import React from "react";
import Input from "../../components/general/Input";
import "./auth.css";

export default function Login({
  username,
  password,
  setUsername,
  setPassword,
}) {
  return (
    <div className="login">
      <Input
        label="Username"
        type="text"
        value={username}
        setValue={setUsername}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        setValue={setPassword}
      />
    </div>
  );
}

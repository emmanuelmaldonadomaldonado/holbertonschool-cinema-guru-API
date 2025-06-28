// src/routes/auth/Register.jsx
import React from "react";
import Input from "../../components/general/Input";
import "./auth.css";

export default function Register({
  username,
  password,
  setUsername,
  setPassword,
}) {
  return (
    <div className="register">
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

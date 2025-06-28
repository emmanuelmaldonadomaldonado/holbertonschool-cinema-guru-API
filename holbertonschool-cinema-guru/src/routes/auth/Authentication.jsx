// src/routes/auth/Authentication.jsx
import React, { useState } from "react";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";
import "./auth.css";

export default function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = _switch ? "/api/auth/login" : "/api/auth/register";

    axios
      .post(url, { username, password })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        setUserUsername(username);
        setIsLoggedIn(true);
      })
      .catch((error) => console.error("Auth error:", error));
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="auth-buttons">
        <button type="button" onClick={() => setSwitch(true)}>
          Sign In
        </button>
        <button type="button" onClick={() => setSwitch(false)}>
          Sign Up
        </button>
      </div>

      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

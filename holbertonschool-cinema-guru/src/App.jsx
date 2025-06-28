// src/App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Authentication from "./routes/auth/Authentication";
import Dashboard from "./routes/dashboard/Dashboard";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    console.log("App component mounted.");

    const accessToken = localStorage.getItem("accessToken");
    console.log("Token found in localStorage:", accessToken);

    if (accessToken) {
      axios
        .post(
          "/api/auth/", // ⚠️ Verifica si esta ruta existe. Normalmente sería algo como /api/auth/validate o /api/auth/me
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          console.log("Backend response:", response.data);
          setIsLoggedIn(true);
          setUserUsername(response.data.username);
        })
        .catch((error) => {
          console.error("Authentication failed:", error);
          setIsLoggedIn(false);
        });
    } else {
      console.log("No token found in localStorage.");
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      )}
    </div>
  );
}

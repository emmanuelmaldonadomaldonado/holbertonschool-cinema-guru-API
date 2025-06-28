import React from "react";
import "./navigation.css";

export default function Header({ userUsername, setIsLoggedIn }) {
  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <img src="https://picsum.photos/100/100" alt="Avatar" />
      <p>Welcome, {userUsername}!</p>
      <span onClick={logout}>Logout 🔓</span>
    </nav>
  );
}

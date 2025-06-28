// src/components/general/SearchBar.jsx
import React from "react";
import "./general.css";

export default function SearchBar({ title, setTitle }) {
  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search..."
        value={title}
        onChange={handleInput}
        className="searchbar-input"
      />
    </div>
  );
}

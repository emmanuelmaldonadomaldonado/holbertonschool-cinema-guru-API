// ✅ src/components/movies/Tag.jsx
import React, { useState } from "react";
import "./movies.css";

export default function Tag({ genre, genres, setGenres }) {
  const [selected, setSelected] = useState(false);

  const handleTag = () => {
    if (selected) {
      setGenres(genres.filter((g) => g !== genre));
    } else {
      setGenres([...genres, genre]);
    }
    setSelected(!selected);
  };

  return (
    <li className={selected ? "tag selected" : "tag"} onClick={handleTag}>
      {genre}
    </li>
  );
}

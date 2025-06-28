import React, { useState, useEffect } from "react";
import MovieCard from "../../components/movies/MovieCard";
import "./dashboard.css";
import axios from "axios";

export default function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/titles/favorite/")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error loading favorites:", error));
  }, []);

  return (
    <div className="favorites">
      <h1>Movies you like</h1>
      <ul>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

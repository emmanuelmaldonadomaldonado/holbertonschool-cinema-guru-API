import React, { useState, useEffect } from "react";
import MovieCard from "../../components/movies/MovieCard";
import "./dashboard.css";
import axios from "axios";

export default function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/titles/watchlater/")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error loading watch later:", error));
  }, []);

  return (
    <div className="watch-later">
      <h1>Movies you like</h1>
      <ul>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

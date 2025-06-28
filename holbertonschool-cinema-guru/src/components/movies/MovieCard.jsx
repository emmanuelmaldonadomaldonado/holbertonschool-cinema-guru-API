import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import "./movies.css";

export default function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/titles/favorite/").then((response) => {
      if (response.data.find((m) => m.imdbId === movie.imdbId)) {
        setIsFavorite(true);
      }
    });

    axios
      .get("http://localhost:8000/api/titles/watchlater/")
      .then((response) => {
        if (response.data.find((m) => m.imdbId === movie.imdbId)) {
          setIsWatchLater(true);
        }
      });
  }, [movie.imdbId]);

  const handleClick = (type) => {
    const url = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`;

    if (type === "favorite") {
      if (isFavorite) {
        axios.delete(url).then(() => setIsFavorite(false));
      } else {
        axios.post(url).then(() => setIsFavorite(true));
      }
    } else {
      if (isWatchLater) {
        axios.delete(url).then(() => setIsWatchLater(false));
      } else {
        axios.post(url).then(() => setIsWatchLater(true));
      }
    }
  };

  return (
    <li className="movie-card">
      <div className="movie-icons">
        <FontAwesomeIcon
          icon={faStar}
          onClick={() => handleClick("favorite")}
          className={isFavorite ? "active" : ""}
        />
        <FontAwesomeIcon
          icon={faClock}
          onClick={() => handleClick("watchlater")}
          className={isWatchLater ? "active" : ""}
        />
      </div>
      <h3>{movie.title}</h3>
      <p>{movie.synopsis}</p>
      <div className="movie-genres">
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </li>
  );
}

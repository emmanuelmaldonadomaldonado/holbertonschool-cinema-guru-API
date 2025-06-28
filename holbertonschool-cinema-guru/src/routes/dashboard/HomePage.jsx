import React, { useState, useEffect } from "react";
import Filter from "../../components/movies/Filter";
import MovieCard from "../../components/movies/MovieCard";
import Button from "../../components/general/Button";
import "./dashboard.css";
import axios from "axios";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  const loadMovies = React.useCallback(
    (currentPage) => {
      axios
        .get("http://localhost:8000/api/titles/advancedsearch", {
          params: { minYear, maxYear, genres, sort, title, page: currentPage },
        })
        .then((response) => {
          if (currentPage === 1) {
            setMovies(response.data);
          } else {
            setMovies((prev) => [...prev, ...response.data]);
          }
        })
        .catch((error) => console.error("Error loading movies:", error));
    },
    [minYear, maxYear, genres, sort, title]
  );

  useEffect(() => {
    loadMovies(1);
  }, [loadMovies]);

  return (
    <div className="homepage">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />

      <ul>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </ul>

      <Button
        label="Load More.."
        onClick={() => {
          const nextPage = page + 1; // Calculas el valor correcto
          setPage(nextPage); // Lo guardas en el estado
          loadMovies(nextPage); // Lo usas correctamente
        }}
      />
    </div>
  );
}

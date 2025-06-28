import React from "react";
import SearchBar from "../general/SearchBar";
import SelectInput from "../general/SelectInput";
import Tag from "./Tag";
import "./movies.css";

const genresList = [
  "Action",
  "Drama",
  "Comedy",
  "Biography",
  "Romance",
  "Thriller",
  "War",
  "History",
  "Sport",
  "Sci-Fi",
  "Documentary",
  "Crime",
  "Fantasy",
];

export default function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  return (
    <div className="filter">
      <SearchBar title={title} setTitle={setTitle} />
      <input
        type="number"
        placeholder="Min Date"
        value={minYear}
        onChange={(e) => setMinYear(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Date"
        value={maxYear}
        onChange={(e) => setMaxYear(e.target.value)}
      />

      <SelectInput
        label="Sort"
        value={sort}
        setValue={setSort}
        options={[
          { value: "latest", label: "Latest" },
          { value: "oldest", label: "Oldest" },
          { value: "highestrated", label: "Highest Rated" },
          { value: "lowestrated", label: "Lowest Rated" },
        ]}
      />

      <ul className="tags">
        {genresList.map((genre, index) => (
          <Tag
            key={index}
            genre={genre}
            filter={true}
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
  );
}

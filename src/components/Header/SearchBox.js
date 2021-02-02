import { Form, FormControl, Button } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { MoviesContext } from "../MoviesContext/MoviesContext";
const SearchBox = () => {
  const [query, setQuery] = useState("");
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";

  const [movies, setMovies] = useContext(MoviesContext);
  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(constructUrl("search/movie", query))
      .then((data) => data.json())
      .then((moviesInfo) => setMovies(moviesInfo.results));
  };
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Form onSubmit={handleSubmit} inline>
      <FormControl
        type="text"
        placeholder="Search for you favorite movie"
        className="mr-sm-2"
        onChange={handleQuery}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};
export default SearchBox;

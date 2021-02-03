import { Form, FormControl } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { MoviesContext } from "../MoviesContext/MoviesContext";
const Geners = () => {
  const BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path) => {
    return `${BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}`;
  };
  const [genres, setGenres] = useState();
  const [movies, setMovies] = useContext(MoviesContext);
  const GENRES_URL =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=1d54e327869a62aba4dc1b58c2b30233&language=en-US";
  useEffect(() => {
    fetch(GENRES_URL)
      .then((data) => data.json())
      .then((genre) => setGenres(genre.genres));
  }, [setGenres]);
  const handleChange = (e) => {
    const genreID = e.target.value;

    fetch(constructUrl("movie/popular"))
      .then((response) => response.json())
      .then((data) => {
        setMovies(
          data.results.filter((movie) => {
            let genreIdS = movie.genre_ids.includes(+genreID);
            return genreIdS;
          })
        );
      });
  };
  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustom" className="mx-2 mt-3">
        <FormControl as="select" custom onChange={handleChange}>
          <option value="AllMovies" defaultValue="selected" disabled hidden>
            All Movies
          </option>
          {genres
            ? genres.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })
            : console.log("there is no data")}
        </FormControl>
      </Form.Group>
    </Form>
  );
};
export default Geners;

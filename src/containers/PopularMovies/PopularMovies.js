import { Container, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
const PopularMovies = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=1d54e327869a62aba4dc1b58c2b30233&language=en-US&page=1";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((moviesData) => setMovies(moviesData.results));
  }, [setMovies]);
  return (
    <Container>
      <Row>
        {movies
          ? movies.map((movie) => {
              return (
                <Col key={movie.id} className="mx-2 mb-3" sm="3">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`movie/${movie.id}`}
                  >
                    <MovieCard movie={movie} />
                  </Link>
                </Col>
              );
            })
          : console.error("there is no data check the api")}
      </Row>
    </Container>
  );
};
export default PopularMovies;

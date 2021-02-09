import { useEffect, useContext } from "react";
import { MoviesContext } from "../../components/MoviesContext/MoviesContext";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
const Home = () => {
  const [movies, setMovies] = useContext(MoviesContext);
  const API_URL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=1d54e327869a62aba4dc1b58c2b30233&language=en-US&page=1";

  useEffect(() => {
    fetch(API_URL).then((data) =>
      data.json().then((moviesInfo) => setMovies(moviesInfo.results))
    );
  }, [setMovies]);
  return (
    <Container>
      <Row>
        {movies.map((movie) => {
          return (
            <Col key={movie.id} className="mx-2 mb-3" sm="3">
              <Link style={{ textDecoration: "none" }} to={`movie/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Home;

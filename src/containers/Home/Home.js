import { useEffect, useContext, useState } from "react";
import { MoviesContext } from "../../components/MoviesContext/MoviesContext";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
const Home = () => {
  const [movies, setMovies] = useContext(MoviesContext);
  const [page, setPage] = useState(1);

  const API_URL = (pageNum) => {
    return `https://api.themoviedb.org/3/movie/top_rated?api_key=1d54e327869a62aba4dc1b58c2b30233&language=en-US&page=${pageNum}`;
  };

  useEffect(() => {
    fetch(API_URL(page)).then((data) =>
      data.json().then((moviesInfo) => setMovies(moviesInfo.results))
    );
  }, [page]);
  const nextBtnHandler = (e) => {
    e.preventDefault();
    setPage((prevNum) => prevNum + 1);
  };
  const backBtnHandler = (e) => {
    e.preventDefault();
    setPage((prevNum) => prevNum - 1);
  };

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
      <div className="d-flex flex-row">
        <Form className="my-5 mx-auto">
          <ButtonToolbar aria-label="Toolbar with Button groups">
            <ButtonGroup aria-label="Pages Button Group">
              <Button variant="danger" onClick={backBtnHandler}>
                Back
              </Button>
              <Button variant="success" onClick={nextBtnHandler}>
                Next
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Form>
      </div>
    </Container>
  );
};
export default Home;

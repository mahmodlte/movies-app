import {
  Container,
  Row,
  Col,
  Button,
  Form,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MovieCard from "../../components/MovieCard/MovieCard";
const PopularMovies = () => {
  const API_URL = (pageNum) => {
    return `https://api.themoviedb.org/3/movie/popular?api_key=1d54e327869a62aba4dc1b58c2b30233&language=en-US&page=${pageNum}`;
  };
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const nextBtnHandler = (e) => {
    e.preventDefault();
    setPage((prevNum) => prevNum + 1);
  };
  const backBtnHandler = (e) => {
    e.preventDefault();
    setPage((prevNum) => prevNum - 1);
  };
  useEffect(() => {
    fetch(API_URL(page))
      .then((data) => data.json())
      .then((moviesData) => setMovies(moviesData));
  }, [page]);
  return (
    <Container className="mt-4">
      <Row>
        {movies.results
          ? movies.results.map((movie) => {
              return (
                <Col key={movie.id} className="mx-2 mb-3" sm="5" md="5" lg="3">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`movie/${movie.id}`}
                  >
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <MovieCard movie={movie} />
                    </motion.div>
                  </Link>
                </Col>
              );
            })
          : console.error("there is no data check the api")}
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
export default PopularMovies;

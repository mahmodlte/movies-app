import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
const MoviePage = ({ match }) => {
  const [movie, setMovie] = useState();
  const API_URL = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=1d54e327869a62aba4dc1b58c2b30233&language=en-US&page=1`;
  const IMG_URL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((movieData) => setMovie(movieData));
  }, [API_URL]);
  return (
    <Container fluid>
      {movie ? (
        <Row>
          <Col className="mt-3" sm="5">
            <Image
              style={{ width: "100%" }}
              src={`${IMG_URL}${movie.poster_path}`}
            />
          </Col>
          <Col sm="6" className="my-5 mx-5">
            <h1>{movie.original_title}</h1>

            <Badge variant="secondary">{movie.vote_average}</Badge>

            <p className="lead my-5">{movie.overview}</p>
            <h1>Cast</h1>
          </Col>
        </Row>
      ) : (
        console.error("error getting data from server ")
      )}
    </Container>
  );
};
export default MoviePage;

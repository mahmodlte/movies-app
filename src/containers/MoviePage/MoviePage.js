import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
const MoviePage = ({ match }) => {
  const [movie, setMovie] = useState();
  const [videos, setVideos] = useState();
  const API_URL = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=1d54e327869a62aba4dc1b58c2b30233&language=en-US&page=1`;
  const VIDEO_URL = `https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=1d54e327869a62aba4dc1b58c2b30233&language=en-US&page=1`;
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((movieData) => setMovie(movieData))
      .catch((err) => console.log(`erorr ${err}`));
    fetch(VIDEO_URL)
      .then((response) => response.json())
      .then((videos) => setVideos(videos));
  }, [API_URL, VIDEO_URL]);
  return (
    <Container fluid>
      {movie ? (
        <Row>
          <Col className="mt-3 shadow-lg mb-3 px-3 py-3" sm="5">
            <Image
              style={{ width: "100%" }}
              src={`${IMG_URL}${movie.poster_path}`}
            />
          </Col>
          <Col sm="6" className="my-5 mx-5">
            <h1>{movie.original_title}</h1>

            <h6>
              Rating
              <Badge className="mx-2" variant="secondary">
                {movie.vote_average}
              </Badge>
            </h6>
            <h6>
              Release Date
              <Badge className="mx-2" variant="info">
                {movie.release_date}
              </Badge>
            </h6>
            <h6>Language: {movie.original_language}</h6>
            <a href={movie.homepage}>
              <h6>Homepage</h6>
            </a>
            <p className="lead my-5">{movie.overview}</p>
            <h1>Traller</h1>

            {videos ? (
              <div className=" embed-responsive embed-responsive-16by9">
                <iframe
                  title={videos.results[0].name}
                  className="embed-responsive-item"
                  src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowfullscreen"
                ></iframe>
              </div>
            ) : (
              console.warn("error ferching data from server")
            )}
          </Col>
        </Row>
      ) : (
        console.warn("error getting data from server ")
      )}
    </Container>
  );
};
export default MoviePage;

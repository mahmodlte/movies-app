import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  console.log(movie);
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={IMG_URL + movie.poster_path} />
      <Card.Body>
        <Card.Title>{movie.original_title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default MovieCard;

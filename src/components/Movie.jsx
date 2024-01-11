import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Movie({ movie }) {
  return (
    <div style={{ display:'flex'}}>
    <Card style={{ width: '25rem' , margin: 50}}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}

        </Card.Text>
      </Card.Body>

      <Card.Body>
   {movie.rating}
      </Card.Body>
    </Card></div>
  );
}

export default Movie;
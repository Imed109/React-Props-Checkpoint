import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Player({ player }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img src={player.image} /> 
      <Card.Body>
        <Card.Title><h2>{player.name}</h2></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> <p>Team: {player.team}</p> </ListGroup.Item>
        <ListGroup.Item><p>Nationality: {player.nationality}</p></ListGroup.Item>
        <ListGroup.Item> <p>Jersey Number: {player.jerseyNumber}</p></ListGroup.Item>
        <ListGroup.Item> <p>Age: {player.age}</p></ListGroup.Item>
      </ListGroup>

    </Card>
  );
}

export default Player;
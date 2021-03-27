import { Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function Event({ event }) {
  return (
    <Col>
      <Card>
        <Card.Title>
          {event.name}
        </Card.Title>
        <Card.Subtitle>
          {event.date}
        </Card.Subtitle>
        <Card.Text>
          <Badge>Hosted by {event.user.name}</Badge>
          <p>{event.description}</p>
        </Card.Text>
      </Card>
    </Col>
  );
}

function Feed({ events, session }) {
  let cards = events.map((event) => (
    <Event event={event} key={event.id} />
  ));

  let new_link = null;
  if (session) {
    new_link = (
      <p><Link to="/events/new">Create Event</Link></p>
    )
  }

  return (
    <div>
      <h2>Events</h2>
      { new_link }
      <Row>{cards}</Row>
    </div>
  );
}

export default connect(({ events, session }) => ({ events, session }))(Feed);
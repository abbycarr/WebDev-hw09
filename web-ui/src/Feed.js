import { Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';


function Event({ event }) {
  return (
    <Col>
      <Card>
        <Card.Text>
          Hosted by {event.user.name} <br />
          {event.description}
        </Card.Text>
      </Card>
    </Col>
  );
}

function Feed({ events }) {
  let cards = events.map((event) => (
    <Event event={event} key={event.id} />
  ));
  return (
    <div>
      <h2>Feed</h2>
      <Row>{cards}</Row>
    </div>
  );
}

export default connect(({ events }) => ({ events }))(Feed);
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function InvitesList({ invites }) {
  let rows = invites.map((invite) => (
    <tr key={invite.id}>
      <td>{invite.response}</td>
      <td>
        {invite.email}
      </td>
    </tr>
  ));

  return (
    <div>
      <Row>
        <Col>
          <h2>List Invites</h2>
          <p>
            <Link to="/invites/new">
              New Invite
            </Link>
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Response</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );

}

function state2props({ invites, invite_form }) {
  return { invites, invite_form };
}

export default connect(state2props)(InvitesList);
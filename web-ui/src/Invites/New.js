import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import pick from 'lodash/pick';

import { create_invite, fetch_invites } from '../api';

export default function InvitesNew() {
  let history = useHistory();
  let [invite, setInvite] = useState({});

  function submit(ev) {
    ev.preventDefault();
    create_invite(invite).then((resp) => {
      if (resp["errors"]) {
        console.log("errors", resp.errors);
      }
      else {
        history.push("/");
        fetch_invites();
      }
    });
  }

  function updateResponse(ev) {
    let p1 = Object.assign({}, invite);
    p1["response"] = ev.target.value;
    setInvite(p1);
  }

  function updateEmail(ev) {
    let p1 = Object.assign({}, invite);
    p1["email"] = ev.target.value;
    setInvite(p1);
  }

  function updateEvent(ev) {
    let p1 = Object.assign({}, invite);
    p1["event_id"] = ev.target.value;
    setInvite(p1);
  }

  return (
    <Row>
      <Col>
        <h6>Send invitees to events-spa.clipturtle.com/events/*EventID*</h6>
        <h2>New Invite</h2>
        <Form onSubmit={submit}>
          <Form.Group>
            <Form.Label>Response</Form.Label>
            <Form.Control type="text"
              onChange={updateResponse}
              value={invite.response} />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Email
            </Form.Label>
            <Form.Control type="text"
              onChange={updateEmail}
              value={invite.email} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Event ID</Form.Label>
            <Form.Control type="text"
              onChange={updateEvent}
              value={invite.evetn_id} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Invite!
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
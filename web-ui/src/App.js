import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Nav from './Nav';
import UsersList from './Users/List';
import UsersNew from './Users/New';
import InvitesList from './Invites/List';
import InvitesNew from './Invites/New';
import EventsNew from './Events/New';
import Feed from './Feed';

function App() {
  return (
    <Container>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Feed />
        </Route>
        <Route path="/events/new" exact>
          <EventsNew />
        </Route>
        <Route path="/users" exact>
          <UsersList />
        </Route>
        <Route path="/users/new" exact>
          <UsersNew />
        </Route>
        <Route path="/invites" exact>
          <InvitesList />
        </Route>
        <Route path="/invites/new" exact>
          <InvitesNew />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
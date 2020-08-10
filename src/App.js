import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Room from 'screens/containers/Room';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/room/:id" component={Room} />
        <Route path="/">
          <Redirect to="/room/5f28c42f6239e613afc82b12" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

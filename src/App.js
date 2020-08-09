import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Room from 'screens/components/Room';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/room" component={Room} />
        <Route path="/">
          <Redirect to="/room" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

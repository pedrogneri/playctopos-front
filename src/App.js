import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'screens/components/Home';
import Room from 'screens/containers/Room';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/room/:id" component={Room} />
      </Switch>
    </Router>
  );
}

export default App;

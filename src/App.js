import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { ToastProvider } from 'components/Toast/toastContext';
import Home from 'screens/containers/Home';
import Room from 'screens/containers/Room';

function App() {
  return (
    <ToastProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room/:id" component={Room} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;

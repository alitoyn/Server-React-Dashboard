import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home.jsx';

// In this file we'd see any generic top level components and setup
// For example ThemeProvider or Router.

const App = () => (

  <Router>
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;

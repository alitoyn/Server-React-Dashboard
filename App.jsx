import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // eslint-disable-next-line no-unused-vars
    Link,
} from 'react-router-dom';
import Home from './pages/Home.jsx';

const Container = styled.div`
  background-color:  #a675a1ff;
`;

const App = () => (
    <Container>
        <Router>
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    </Container>
);

export default App;

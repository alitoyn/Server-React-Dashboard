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
import ButtonAppBar from './components/ButtonAppBar.jsx';

const BackgroundContainer = styled.div`
  background-color:  #a675a1ff;
`;

const App = () => (
    <BackgroundContainer>
        <Router>
            <ButtonAppBar />
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    </BackgroundContainer>
);

export default App;

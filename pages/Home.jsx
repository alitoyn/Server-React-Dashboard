import React from 'react';
import styled from 'styled-components';
import OutlinedCard from '../components/OutlinedCard.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => (<Container>
  <OutlinedCard title={'Hello World!'} content={'This text goes here!'}/>
</Container>);

export default Home;

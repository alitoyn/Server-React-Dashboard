import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => (<Container>
  <div>Hello World!</div>
</Container>);

export default Home;

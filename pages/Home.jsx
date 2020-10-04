import React from 'react';
import styled from 'styled-components';
import OutlinedCard from '../components/OutlinedCard.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const dataObject = [
  {
    name: 'Elder',
    desc: 'Great bit of metal',
  },
  {
    name: 'Stone',
    desc: 'Solid bit of metal',
  },
];

const Home = () => (<Container>

  {dataObject.map((server, i) => (<OutlinedCard key={i}
                          title={server.name}
                          content={server.desc}/>))}
</Container>);

export default Home;

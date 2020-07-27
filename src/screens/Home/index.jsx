import React, { useState } from 'react';
import socket from '../../socket';

import {
  Container,
  VideoPlayer,
  CenteredContainer,
  Input,
} from './styles';

socket.on('connect', () => {
  console.log('[IO] Connect => New connection');
});

const Home = () => {
  const [videoId, setVideoId] = useState('c0kfcP_nD9E');

  const handleSearch = (event) => {
    setVideoId(event.target.value);
  };

  return (
    <Container>
      <CenteredContainer>
        <label>Digite o ID do video</label>
        <Input type="text" value={videoId} onChange={handleSearch} />
        <VideoPlayer
          allow="autoplay"
          title="Youtube video player"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&start=186`}>
        </VideoPlayer>
      </CenteredContainer>
    </Container>
  );
};

export default Home;

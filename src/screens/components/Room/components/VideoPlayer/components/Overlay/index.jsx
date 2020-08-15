import React from 'react';

import VideoProgress from '../VideoProgress';
import { Container } from './styles';

const Overlay = ({ ...props }) => {
  return (
    <Container>
      <VideoProgress {...props} />
    </Container>
  );
};

export default Overlay;

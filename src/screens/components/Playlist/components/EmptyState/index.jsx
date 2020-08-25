import React from 'react';

import { Container, SadIcon, Text } from './styles';

const EmptyState = () => {
  return (
    <Container>
      <SadIcon />
      <Text>No videos yet</Text>
    </Container>
  );
};

export default EmptyState;

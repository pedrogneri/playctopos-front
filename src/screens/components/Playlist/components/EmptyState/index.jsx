import React from 'react';

import { Container, Icon, Text, IconContainer } from './styles';

const EmptyState = () => {
  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>

      <Text>{'No videos yet :('}</Text>
    </Container>
  );
};

export default EmptyState;

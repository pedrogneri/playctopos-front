import React, { useMemo } from 'react';

import { Container, ProgressBar, BaseBar } from './styles';

type Props = {
  value: number;
  maxValue: number;
}

const VideoProgress = ({ value, maxValue }: Props) => {
  const percentValue = useMemo(() => (value * 100) / maxValue, [value, maxValue]);

  return (
    <Container>
      <BaseBar>
        <ProgressBar $value={percentValue} />
      </BaseBar>
    </Container>
  );
};

export default VideoProgress;

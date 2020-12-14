import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { Container, ProgressBar, BaseBar } from './styles';

const VideoProgress = ({ value, maxValue }) => {
  const [percentValue, setPercentValue] = useState();

  useEffect(() => {
    setPercentValue((value * 100) / maxValue);
  }, [value, maxValue]);

  return (
    <Container>
      <BaseBar>
        <ProgressBar value={percentValue} />
      </BaseBar>
    </Container>
  );
};

VideoProgress.propTypes = {
  value: PropTypes.number,
  maxValue: PropTypes.number,
};

export default VideoProgress;

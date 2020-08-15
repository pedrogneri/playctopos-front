import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { getFormattedTimeBySeconds } from 'utils/timeFormatter';

import { Container, ProgressBar, BaseBar, TimeLabel } from './styles';

const VideoProgress = ({ value, maxValue }) => {
  const [percentValue, setPercentValue] = useState(0);

  useEffect(() => {
    setPercentValue((value * 100) / maxValue);
  }, [value, maxValue]);

  return (
    <Container>
      <BaseBar>
        <ProgressBar value={percentValue} />
      </BaseBar>
      <TimeLabel>{getFormattedTimeBySeconds(maxValue - value)}</TimeLabel>
    </Container>
  );
};

VideoProgress.propTypes = {
  value: PropTypes.number,
  maxValue: PropTypes.number,
};

export default VideoProgress;

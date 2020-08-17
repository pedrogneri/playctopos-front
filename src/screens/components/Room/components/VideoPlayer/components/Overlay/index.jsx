import React from 'react';

import PropTypes from 'prop-types';

import VideoProgress from '../VideoProgress';
import VolumeControl from '../VolumeControl';
import { Container } from './styles';

const Overlay = ({ volume, onChangeVolume, time, duration }) => {
  return (
    <Container>
      <VolumeControl volume={volume} onChangeVolume={onChangeVolume} />
      <VideoProgress value={time} maxValue={duration} />
    </Container>
  );
};

Overlay.propTypes = {
  volume: PropTypes.number.isRequired,
  onChangeVolume: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Overlay;

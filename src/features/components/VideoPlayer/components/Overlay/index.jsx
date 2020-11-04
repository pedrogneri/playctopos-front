import React from 'react';

import PropTypes from 'prop-types';

import VideoProgress from '../VideoProgress';
import VolumeControl from '../VolumeControl';
import { Container, Content } from './styles';

const Overlay = ({ volume, onChangeVolume, onChangeIsMuted, isMuted, time, duration }) => {
  return (
    <Container>
      <Content>
        <VolumeControl
          isMuted={isMuted}
          onChangeIsMuted={onChangeIsMuted}
          volume={volume}
          onChangeVolume={onChangeVolume}
        />
        <VideoProgress value={time} maxValue={duration} />
      </Content>
    </Container>
  );
};

Overlay.propTypes = {
  volume: PropTypes.number.isRequired,
  onChangeVolume: PropTypes.func.isRequired,
  isMuted: PropTypes.bool.isRequired,
  onChangeIsMuted: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Overlay;

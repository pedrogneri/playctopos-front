import React from 'react';

import PropTypes from 'prop-types';

import { Container, SliderContainer, MutedIcon, LowIcon, HighIcon, StyledSlider, IconContainer } from './styles';

const VolumeControl = ({ volume, onChangeVolume, isMuted, onChangeIsMuted }) => {
  return (
    <Container>
      <IconContainer onClick={onChangeIsMuted}>
        {isMuted ? <MutedIcon /> : volume >= 0.5 ? <HighIcon /> : <LowIcon />}
      </IconContainer>

      <SliderContainer className="slider-container">
        <StyledSlider
          orientation="horizontal"
          value={volume * 100}
          onChange={(_, newValue) => onChangeVolume(newValue / 100)}
        />
      </SliderContainer>
    </Container>
  );
};

VolumeControl.propTypes = {
  volume: PropTypes.number.isRequired,
  isMuted: PropTypes.bool.isRequired,
  onChangeVolume: PropTypes.func.isRequired,
  onChangeIsMuted: PropTypes.func.isRequired,
};

export default VolumeControl;

import React from 'react';

import PropTypes from 'prop-types';

import { Container, SliderContainer, Icon, StyledSlider } from './styles';

const VolumeControl = ({ volume, onChangeVolume }) => {
  return (
    <Container>
      <Icon />
      <SliderContainer className="slider-container">
        <StyledSlider value={volume * 100} onChange={(_, newValue) => onChangeVolume(newValue / 100)} />
      </SliderContainer>
    </Container>
  );
};

VolumeControl.propTypes = {
  volume: PropTypes.number.isRequired,
  onChangeVolume: PropTypes.func.isRequired,
};

export default VolumeControl;

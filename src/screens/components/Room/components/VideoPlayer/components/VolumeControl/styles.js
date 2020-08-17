import { IoMdVolumeHigh } from 'react-icons/io';

import { Slider, withStyles } from '@material-ui/core';
import styled from 'styled-components';

export const StyledSlider = withStyles({
  root: {
    color: '#ca3e47',
    height: 5,
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
  },
  active: {},
  track: {
    height: 5,
    borderRadius: 4,
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
})(Slider);

export const SliderContainer = styled.div`
  display: none;
  position: absolute;
  justify-content: center;
  align-items: center;
  min-height: 10px;
  min-width: 100px;
  left: 20px;
  bottom: 6px;
  padding-left: 20px;
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;

  &:hover .slider-container {
    display: flex;
  }
`;

export const Icon = styled(IoMdVolumeHigh)`
  height: 30px;
  width: 30px;
  color: #fff !important;
`;

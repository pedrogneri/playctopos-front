import { MdVolumeUp, MdVolumeDown, MdVolumeOff } from 'react-icons/md';

import { Slider, withStyles } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const StyledSlider = withStyles({
  root: {
    color: '#fff',
    height: 5,
    width: 100,
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
  width: 150px;
  left: 30px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover svg {
    color: ${({ theme }) => theme.white} !important;
  }

  @media (min-width: 960px) {
    &:hover .slider-container {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const VolumeIcon = css`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.gray} !important;
  margin: 0 12px;
  cursor: pointer;

  @media (max-width: 959px) {
    height: 20px;
    width: 20px;
    margin: 0 5px;
  }
`;

export const MutedIcon = styled(MdVolumeOff)`
  ${VolumeIcon};
`;

export const LowIcon = styled(MdVolumeDown)`
  ${VolumeIcon};
`;

export const HighIcon = styled(MdVolumeUp)`
  ${VolumeIcon};
`;

import { MdVolumeUp, MdVolumeDown, MdVolumeOff } from 'react-icons/md';

import { Slider, withStyles } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const StyledSlider = withStyles({
  root: {
    color: '#fff',
    height: 3,
    width: 90,
  },
  thumb: {
    height: 12,
    width: 12,
    marginTop: -3,
    backgroundColor: '#fff',
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
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
  width: 120px;
  left: 20px;
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

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const VolumeIcon = css`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.gray} !important;
  cursor: pointer;

  @media (max-width: 959px) {
    height: 25px;
    width: 25px;
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

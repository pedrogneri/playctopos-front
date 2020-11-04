import { IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff } from 'react-icons/io';

import { Slider, withStyles } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const StyledSlider = withStyles({
  root: {
    color: '#ca3e47',
    height: 300,
  },
  thumb: {
    height: 12,
    width: 12,
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
  height: 150px;
  padding: 25px 0;
  bottom: 20px;
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 30px;
  margin-right: 12px;

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
  color: ${({ theme }) => theme.white} !important;
  cursor: pointer;
`;

export const MutedIcon = styled(IoMdVolumeOff)`
  ${VolumeIcon};
`;

export const LowIcon = styled(IoMdVolumeLow)`
  ${VolumeIcon};
`;

export const HighIcon = styled(IoMdVolumeHigh)`
  ${VolumeIcon};
`;

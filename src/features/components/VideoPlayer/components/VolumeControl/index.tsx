import React, { useMemo } from 'react';

import {
  Container, SliderContainer, MutedIcon, LowIcon, HighIcon, StyledSlider, IconContainer,
} from './styles';

type Props = {
  volume: number,
  isMuted: boolean,
  onChangeVolume: (value: number) => void,
  onChangeIsMuted: () => void,
}

const VolumeControl = ({
  volume, onChangeVolume, isMuted, onChangeIsMuted,
}: Props) => {
  const volumeIcon = useMemo(() => {
    if (isMuted) {
      return <MutedIcon />;
    }
    if (volume >= 0.5) {
      return <HighIcon />;
    }
    return <LowIcon />;
  }, [isMuted, volume]);

  return (
    <Container>
      <IconContainer onClick={onChangeIsMuted}>
        {volumeIcon}
      </IconContainer>

      <SliderContainer className="slider-container">
        <StyledSlider
          orientation="horizontal"
          value={volume * 100}
          onChange={(_, newValue) => onChangeVolume((newValue as number) / 100)}
        />
      </SliderContainer>
    </Container>
  );
};

export default VolumeControl;

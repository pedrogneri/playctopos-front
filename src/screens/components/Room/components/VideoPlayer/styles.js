import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';

import styled, { css } from 'styled-components';

export const PlayerStyle = css`
  width: 100% !important;
  height: 80% !important;

  @media (max-width: 800px) {
    height: 100% !important;
  }
`;

export const Placeholder = styled.div`
  display: flex;
  background-color: #525252;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(17, 17, 17, 1));

  ${PlayerStyle}
`;

export const PlayerContainer = styled.div`
  position: relative;

  ${PlayerStyle}
`;

export const Player = styled(ReactPlayer)`
  pointer-events: none;
  border: none;

  width: 100% !important;
  height: 100% !important;
`;

export const PlayIcon = styled(FaPlay)`
  width: 10%;
  height: 10%;
  color: #fff;
`;

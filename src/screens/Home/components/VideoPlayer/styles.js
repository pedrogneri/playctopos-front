import styled, { css } from 'styled-components';
import { FaPlay } from 'react-icons/fa';

export const PlayerStyle = css`
  width: 100%;
  height: 80%;

  @media (max-width: 800px) {
    height: 100%;
  }
`;

export const Placeholder = styled.div`
  display: flex;
  background-color: #525252;
  justify-content: center;
  align-items: center;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(17, 17, 17, 1));

  ${PlayerStyle}
`;

export const Player = styled.iframe`
  pointer-events: none;
  border: none;

  ${PlayerStyle}
`;

export const PlayIcon = styled(FaPlay)`
  width: 10%;
  height: 10%;
  color: #fff;
`;

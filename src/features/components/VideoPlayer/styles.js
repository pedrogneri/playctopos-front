import { MdPlaylistAdd } from 'react-icons/md';
import ReactPlayer from 'react-player';

import styled, { css } from 'styled-components';

export const PlayerStyle = css`
  width: 100% !important;
  min-height: 90% !important;

  @media (max-width: 959px) {
    height: 100% !important;
  }
`;

export const Placeholder = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primary.light};
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(17, 17, 17, 1));
  height: 100%;
  color: #fff;

  ${PlayerStyle}
`;

export const EmptyText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-left: 2px solid #fff;

  & > p {
    line-height: 30px;
    font-size: 20px;
  }

  @media (max-width: 950px) {
    padding: 12px;

    & > p {
      line-height: 22px;
      font-size: 12px;
    }
  }
`;

export const VideoInfoContainer = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  z-index: 3;
`;

export const PlayerContainer = styled.div`
  position: relative;
  display: inline-block;

  ${PlayerStyle}
`;

export const Player = styled(ReactPlayer)`
  pointer-events: none;
  border: none;

  width: 100% !important;
  height: 100% !important;
`;

export const PlayIcon = styled(MdPlaylistAdd)`
  height: 10%;
  width: 10%;
  min-height: 50px;
  margin-right: 12px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

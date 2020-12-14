import { IoMdSkipForward } from 'react-icons/io';
import { MdFeaturedPlayList } from 'react-icons/md';

import { Grid } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const Container = styled(Grid)`
  padding: 12px;
  height: 100%;
  background-color: ${({ theme }) => theme.primary.dark};

  @media (max-width: 959px) {
    border-bottom: 2px solid ${({ theme }) => theme.primary.default};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const InfoContainer = styled(Grid)`
  padding-left: 12px;
`;

export const Title = styled.h5`
  color: ${({ theme }) => theme.white};
  font-weight: normal;
`;

export const Subtitle = styled.h5`
  color: ${({ theme }) => theme.gray};
  font-weight: normal;
`;

Title.xs = styled.h5`
  color: ${({ theme }) => theme.white};
  font-size: 12px;
`;

Subtitle.xs = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.white};
`;

export const IconStyle = css`
  height: 25px;
  width: 25px;
  color: ${({ theme }) => theme.gray} !important;
  margin: 0 12px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.white} !important;
  }

  @media (max-width: 959px) {
    height: 20px;
    width: 20px;
    margin: 0 5px;
  }
`;

export const SkipIcon = styled(IoMdSkipForward)`
  ${IconStyle}
`;

export const PlaylistIcon = styled(MdFeaturedPlayList)`
  ${IconStyle}
`;

export const Thumbnail = styled.img`
  width: 100%;
  max-width: 200px;
`;

export const TimeLabel = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 12px;
`;

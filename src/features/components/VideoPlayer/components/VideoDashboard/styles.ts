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

  &:not(:last-child) {
    margin-right: 24px;
  }

  @media (max-width: 959px) {
    &:not(:last-child) {
      margin-right: 4vh;
    }
  }
`;

export const IconStyle = css`
  height: 25px;
  width: 25px;
  color: ${({ theme }) => theme.gray} !important;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.white} !important;
  }

  @media (max-width: 959px) {
    height: 20px;
    width: 20px;
  }
`;

export const SkipIcon = styled(IoMdSkipForward)`
  ${IconStyle}
`;

export const PlaylistIcon = styled(MdFeaturedPlayList)`
  ${IconStyle}
`;

export const TitleSectionWrapper = styled.div`
  margin-bottom: 20px;
`;

export const TimeLabel = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 12px;
`;

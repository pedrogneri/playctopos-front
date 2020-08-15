import { IoMdSkipForward } from 'react-icons/io';
import { MdFeaturedPlayList } from 'react-icons/md';

import { Grid } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const Container = styled(Grid)`
  padding: 12px;
  height: 100%;
  background-color: #424242;
`;

export const InfoContainer = styled(Grid)`
  padding-left: 12px;
`;

export const Title = styled.h3`
  color: #fff;
  margin-bottom: 12px;
`;

export const Subtitle = styled.h5`
  color: #fff;
  font-weight: normal;
`;

Title.xs = styled.h5`
  color: #fff;
  margin-bottom: 6px;
`;

Subtitle.xs = styled.p`
  color: #fff;
`;

export const IconStyle = css`
  height: 30px;
  width: 30px;
  color: #fff !important;
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

import React from 'react';
import htmlParser from 'react-html-parser';

import { Grid, Hidden, Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';

import UserBadge from 'components/UserBadge';

import { Container, SkipIcon, Title, Subtitle, Thumbnail, InfoContainer, PlaylistIcon, IconContainer } from './styles';

const VideoInfo = ({ title, channel, thumbnail, addedBy, onShowPlaylist, onSkip }) => {
  return (
    <Container container alignItems="center">
      <Grid container item xs={12} sm={8} direction="row" alignItems="center">
        <Grid container item xs={3} xl={2} justify="center">
          <Thumbnail src={thumbnail} />
        </Grid>

        <InfoContainer item xs={9} xl={10}>
          <Hidden mdDown>
            <Title>{htmlParser(title)}</Title>
            <Subtitle>{htmlParser(channel)}</Subtitle>
          </Hidden>
          <Hidden lgUp>
            <Title.xs>{htmlParser(title)}</Title.xs>
            <Subtitle.xs>{htmlParser(channel)}</Subtitle.xs>
          </Hidden>

          <Hidden xsDown>
            <UserBadge username={addedBy} />
          </Hidden>
        </InfoContainer>
      </Grid>

      <Grid container item xs={12} sm={4} direction="row">
        <Hidden smUp>
          <Grid container item xs={6} sm={12} justify="flex-start" alignItems="center">
            <UserBadge username={addedBy} />
          </Grid>
        </Hidden>

        <Grid container item xs={6} sm={12} justify="flex-end">
          <Tooltip title="Open playlist" placement="top">
            <IconContainer>
              <PlaylistIcon onClick={onShowPlaylist} />
            </IconContainer>
          </Tooltip>
          <Tooltip title="Skip video" placement="top">
            <IconContainer>
              <SkipIcon onClick={onSkip} />
            </IconContainer>
          </Tooltip>
        </Grid>
      </Grid>
    </Container>
  );
};

VideoInfo.propTypes = {
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  addedBy: PropTypes.string.isRequired,
  onShowPlaylist: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
};

export default VideoInfo;

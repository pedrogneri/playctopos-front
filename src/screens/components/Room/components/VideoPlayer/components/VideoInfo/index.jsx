import React from 'react';

import { Grid, Hidden, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Container, SkipIcon, Title, Subtitle, Thumbnail, InfoContainer, PlaylistIcon } from './styles';

const VideoInfo = ({ title, channel, thumbnail, onShowPlaylist, onSkip }) => {
  return (
    <Container container alignItems="center">
      <Grid container xs={12} sm={8} direction="row" alignItems="center">
        <Grid xs={3} xl={2}>
          <Thumbnail src={thumbnail} />
        </Grid>

        <InfoContainer xs={9} xl={10}>
          <Hidden smDown>
            <Title>{title}</Title>
            <Subtitle>{channel}</Subtitle>
          </Hidden>
          <Hidden mdUp>
            <Title.xs>{title}</Title.xs>
            <Subtitle.xs>{channel}</Subtitle.xs>
          </Hidden>
        </InfoContainer>
      </Grid>

      <Grid container xs={12} sm={4} justify="flex-end">
        <IconButton onClick={onShowPlaylist}>
          <PlaylistIcon />
        </IconButton>

        <IconButton onClick={onSkip}>
          <SkipIcon />
        </IconButton>
      </Grid>
    </Container>
  );
};

VideoInfo.propTypes = {
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  onShowPlaylist: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
};

export default VideoInfo;

import React from 'react';
import htmlParser from 'react-html-parser';

import { Grid, Hidden, Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';

import UserBadge from 'components/UserBadge';
import { getFormattedTimeBySeconds } from 'utils/timeFormatter';

import VideoProgress from '../VideoProgress';
import VolumeControl from '../VolumeControl';
import {
  Container,
  SkipIcon,
  Title,
  Subtitle,
  Thumbnail,
  InfoContainer,
  PlaylistIcon,
  IconContainer,
  TimeLabel,
} from './styles';

const VideoDashboard = ({
  title,
  channel,
  thumbnail,
  addedBy,
  onShowPlaylist,
  onSkip,
  volume,
  onChangeVolume,
  onChangeIsMuted,
  isMuted,
  time,
  duration,
}) => {
  return (
    <>
      <VideoProgress value={time} maxValue={duration} />
      <Container container justify="space-between" alignItems="center">
        <Grid container item xs={12} sm={4} direction="row" alignItems="center">
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
          </InfoContainer>
        </Grid>

        <Grid container item xs={12} sm={4} direction="row">
          <Grid container item xs={6} sm={12} justify="center">
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
            <IconContainer>
              <VolumeControl
                isMuted={isMuted}
                onChangeIsMuted={onChangeIsMuted}
                volume={volume}
                onChangeVolume={onChangeVolume}
              />
            </IconContainer>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={4} direction="column" alignItems="flex-end">
          <TimeLabel>{`${getFormattedTimeBySeconds(time)} / ${getFormattedTimeBySeconds(duration)}`}</TimeLabel>
          <UserBadge username={addedBy} />
        </Grid>
      </Container>
    </>
  );
};

VideoDashboard.propTypes = {
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  addedBy: PropTypes.string.isRequired,
  onShowPlaylist: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  onChangeVolume: PropTypes.func.isRequired,
  isMuted: PropTypes.bool.isRequired,
  onChangeIsMuted: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default VideoDashboard;

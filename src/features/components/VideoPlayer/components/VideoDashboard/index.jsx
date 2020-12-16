import React, { useMemo } from 'react';

import { Grid, Hidden, Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';

import UserBadge from 'components/UserBadge';
import { getFormattedTimeBySeconds } from 'utils/timeFormatter';

import TitleSection from '../TitleSection';
import VideoProgress from '../VideoProgress';
import VolumeControl from '../VolumeControl';
import { Container, SkipIcon, PlaylistIcon, IconContainer, TimeLabel, TitleSectionWrapper } from './styles';

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
  const timeLabelText = useMemo(() => `${getFormattedTimeBySeconds(time)} / ${getFormattedTimeBySeconds(duration)}`, [
    time,
    duration,
  ]);

  return (
    <>
      <VideoProgress value={time} maxValue={duration} />
      <Container container justify="space-between" alignItems="center">
        <Hidden smUp>
          <TitleSectionWrapper>
            <TitleSection title={title} channel={channel} thumbnail={thumbnail} />
          </TitleSectionWrapper>
        </Hidden>

        <Grid container item xs={6} sm={4} direction="row">
          <Grid container item>
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

        <Hidden xsDown>
          <TitleSection title={title} channel={channel} thumbnail={thumbnail} />
        </Hidden>

        <Grid container item xs={6} sm={4} direction="column" alignItems="flex-end">
          <TimeLabel>{timeLabelText}</TimeLabel>
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

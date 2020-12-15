import React, { useMemo } from 'react';
import htmlParser from 'react-html-parser';

import { Grid, Hidden, Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Title, Subtitle, Thumbnail, InfoContainer } from './styles';

const TitleSection = ({ title, channel, thumbnail }) => {
  const parsedTitle = useMemo(() => htmlParser(title), [title]);
  const parsedChannel = useMemo(() => htmlParser(channel), [channel]);

  return (
    <Grid container item xs={12} sm={4} direction="row" justify="center" alignItems="center">
      <Thumbnail src={thumbnail} />

      <InfoContainer>
        <Hidden mdDown>
          <Tooltip title={parsedTitle} placement="top">
            <Title>{parsedTitle}</Title>
          </Tooltip>

          <Subtitle>{parsedChannel}</Subtitle>
        </Hidden>
        <Hidden lgUp>
          <Title.xs>{parsedTitle}</Title.xs>
          <Subtitle.xs>{parsedChannel}</Subtitle.xs>
        </Hidden>
      </InfoContainer>
    </Grid>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default TitleSection;

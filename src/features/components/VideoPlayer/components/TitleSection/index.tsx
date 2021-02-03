import React, { useMemo } from 'react';
import htmlParser from 'react-html-parser';

import { Grid, Tooltip } from '@material-ui/core';

import {
  Title, Subtitle, Thumbnail, InfoContainer,
} from './styles';

type Props = {
  title: string,
  channel: string,
  thumbnail: string,
}

const TitleSection = ({ title, channel, thumbnail }: Props) => {
  const parsedTitle = useMemo(() => htmlParser(title), [title]);
  const parsedChannel = useMemo(() => htmlParser(channel), [channel]);

  return (
    <Grid container item xs={12} sm={4} direction="row" justify="center" alignItems="center">
      <Thumbnail src={thumbnail} />

      <InfoContainer>
        <Tooltip title={parsedTitle} placement="top">
          <Title>{parsedTitle}</Title>
        </Tooltip>

        <Subtitle>{parsedChannel}</Subtitle>
      </InfoContainer>
    </Grid>
  );
};

export default TitleSection;

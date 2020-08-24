import React from 'react';

import { Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Container, InfoContainer, Thumbnail, Title, Channel, AddToPlaylistIcon } from './styles';

const VideoCard = ({ id, title, channel, thumbnail, onAddToPlaylist }) => {
  const handleAddToPlaylist = () => {
    onAddToPlaylist({ id, title, channel, thumbnail });
  };

  return (
    <Container key={id}>
      <Thumbnail src={thumbnail} alt={`${title}-thumbnail`} />
      <InfoContainer>
        <Title>{title}</Title>
        <Channel>{channel}</Channel>
        <Tooltip title="Add to playlist" placement="bottom-start">
          <div>
            <AddToPlaylistIcon onClick={handleAddToPlaylist} />
          </div>
        </Tooltip>
      </InfoContainer>
    </Container>
  );
};

VideoCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  thumbnail: PropTypes.string,
  onAddToPlaylist: PropTypes.func.isRequired,
};

export default VideoCard;

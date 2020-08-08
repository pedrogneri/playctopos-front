import React from 'react';
import PropTypes from 'prop-types';

import { Container, InfoContainer, Thumbnail, Title, Channel, AddToPlaylistIcon } from './styles';

const VideoCard = ({ id, title, channel, thumbnail, onAddToPlaylist }) => {
  return (
    <Container key={id}>
      <Thumbnail src={thumbnail} alt={`${title}-thumbnail`} />
      <InfoContainer>
        <Title>{title}</Title>
        <Channel>{channel}</Channel>
        <AddToPlaylistIcon onClick={() => onAddToPlaylist(id)} />
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

import React from 'react';
import htmlParser from 'react-html-parser';

import { Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';

import { getUsername } from 'utils/username';

import {
  Container,
  InfoContainer,
  Thumbnail,
  Title,
  Channel,
  AddIcon,
  RemoveIcon,
  BottomContainer,
  UserLabel,
  IconContainer,
} from './styles';

const VideoCard = ({ index, id, title, channel, thumbnail, addedBy, onAddToPlaylist, onRemoveFromPlaylist }) => {
  const handleRemoveFromPlaylist = () => {
    onRemoveFromPlaylist(index);
  };

  const handleAddToPlaylist = () => {
    onAddToPlaylist({ id, title, channel, thumbnail, addedBy: getUsername() });
  };

  return (
    <Container>
      <Thumbnail src={thumbnail} alt={`${title}-thumbnail`} />
      <InfoContainer>
        <Title>{htmlParser(title)}</Title>
        <Channel>{htmlParser(channel)}</Channel>
        <BottomContainer>
          {addedBy && <UserLabel>{`Added by ${addedBy}`}</UserLabel>}
          {!!onAddToPlaylist ? (
            <Tooltip title="Add to playlist" placement="bottom-start">
              <IconContainer>
                <AddIcon onClick={handleAddToPlaylist} />
              </IconContainer>
            </Tooltip>
          ) : (
            <Tooltip title="Remove from playlist" placement="bottom-start">
              <IconContainer>
                <RemoveIcon onClick={handleRemoveFromPlaylist} />
              </IconContainer>
            </Tooltip>
          )}
        </BottomContainer>
      </InfoContainer>
    </Container>
  );
};

VideoCard.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  addedBy: PropTypes.string,
  onAddToPlaylist: PropTypes.func,
  onRemoveFromPlaylist: PropTypes.func,
};

export default VideoCard;

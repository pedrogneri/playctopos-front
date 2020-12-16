import React from 'react';
import htmlParser from 'react-html-parser';

import { Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';

import { truncateText } from 'utils/generic';
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
  Row,
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
      <Row>
        <Thumbnail src={thumbnail} alt={`${title}-thumbnail`} />
        <InfoContainer>
          <Tooltip title={htmlParser(title)} placement="bottom-start">
            <Title>{truncateText(htmlParser(title).toString(), 35)}</Title>
          </Tooltip>
          <Channel>{htmlParser(channel)}</Channel>
        </InfoContainer>
        <BottomContainer>
          {!!onAddToPlaylist ? (
            <Tooltip title="Add to playlist" placement="bottom-start">
              <div>
                <AddIcon onClick={handleAddToPlaylist} />
              </div>
            </Tooltip>
          ) : (
            <Tooltip title="Remove from playlist" placement="bottom-start">
              <div>
                <RemoveIcon onClick={handleRemoveFromPlaylist} />
              </div>
            </Tooltip>
          )}
        </BottomContainer>
      </Row>
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

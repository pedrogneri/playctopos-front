import React, { useMemo } from 'react';
import htmlParser from 'react-html-parser';
import { DraggableProvided } from 'react-beautiful-dnd';

import { Tooltip } from '@material-ui/core';

import { truncateText } from 'utils/generic';
import { getUsername } from 'utils/username';
import { Video } from 'models/video';

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

type Props = {
  dndProvided?: DraggableProvided,
  index: number,
  id: string,
  title: string,
  channel: string,
  thumbnail: string,
  addedBy?: string,
  onAddToPlaylist?: (video: Video) => void,
  onRemoveFromPlaylist?: (index: number) => void,
}

const VideoCard = ({
  dndProvided,
  index,
  id,
  title,
  channel,
  thumbnail,
  addedBy,
  onAddToPlaylist,
  onRemoveFromPlaylist,
}: Props) => {
  const dndProps = useMemo(() => {
    if (dndProvided) {
      const { innerRef, draggableProps, dragHandleProps } = dndProvided;
      return { ref: innerRef, ...draggableProps, ...dragHandleProps };
    }
    return {};
  }, [dndProvided]);

  const handleRemoveFromPlaylist = () => {
    if (onRemoveFromPlaylist) {
      onRemoveFromPlaylist(index);
    }
  };

  const handleAddToPlaylist = () => {
    if (onAddToPlaylist) {
      onAddToPlaylist({
        id, title, channel, thumbnail, addedBy: getUsername(),
      });
    }
  };

  return (
    <Container {...dndProps}>
      <Row>
        <Thumbnail src={thumbnail} alt={`${title}-thumbnail`} />
        <InfoContainer>
          <Tooltip title={htmlParser(title)} placement="bottom-start">
            <Title>{truncateText(htmlParser(title).toString(), 35)}</Title>
          </Tooltip>
          <Channel>{htmlParser(channel)}</Channel>
        </InfoContainer>
        <BottomContainer>
          {onAddToPlaylist ? (
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

export default VideoCard;

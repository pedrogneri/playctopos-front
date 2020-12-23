import React, { useEffect, useState, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Hidden } from '@material-ui/core';
import { useStoreState } from 'easy-peasy';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import Loader from 'components/Loader';
import useToast from 'hooks/useToast';
import { getVideoListByQuery } from 'services/search';

import EmptyState from './components/EmptyState';
import VideoCard from './components/VideoCard';
import {
  Container,
  SearchIcon,
  ClearIcon,
  ResultsContainer,
  SearchWrapper,
  StyledForm,
  TitleSection,
  CloseButton,
} from './styles';

const Playlist = ({ onUpdatePlaylist, onClose }) => {
  const toast = useToast();
  const searchBarRef = useRef();

  const playlist = useStoreState((state) => state.playlist);
  const [playlistState, setPlaylistState] = useState(playlist);

  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    setPlaylistState(playlist);
  }, [playlist]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      setLoading(true);
      getVideoListByQuery(query)
        .then((videoList) => {
          if (videoList.length > 0) {
            setShowResults(true);
            setResults(videoList);
          } else {
            toast.add({ type: 'warning', message: 'No results' });
          }
        })
        .catch(() => {
          toast.add({ type: 'error', message: 'Something went wrong :(' });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const reorder = (startIndex, endIndex) => {
    const result = Array.from(playlist);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const list = reorder(result.source.index, result.destination.index);

    setPlaylistState(list);
    onUpdatePlaylist(list);
  };

  const handleChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleClickClear = () => {
    setQuery('');
    setShowResults(false);
  };

  const handleAddToPlaylist = (video) => {
    const newPlaylist = [...playlist, video];
    onUpdatePlaylist(newPlaylist);
    setQuery('');
    setShowResults(false);
  };

  const handleRemoveFromPlaylist = (index) => {
    playlist.splice(index, 1);
    onUpdatePlaylist(playlist);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <SearchWrapper>
          <Hidden smUp>
            <CloseButton onClick={onClose} />
          </Hidden>

          <StyledForm onSubmit={handleSearch}>
            <Input
              inputRef={searchBarRef}
              value={query}
              onChange={handleChangeQuery}
              placeholder="Search something..."
              onClick={showResults ? handleClickClear : undefined}
              endAdornment={showResults ? <ClearIcon /> : <SearchIcon />}
            />
          </StyledForm>
        </SearchWrapper>
        {loading ? (
          <Loader />
        ) : (
          <>
            {!showResults && playlist.length === 0 && <EmptyState />}
            {showResults && (
              <>
                <TitleSection>Results</TitleSection>
                <ResultsContainer>
                  {results.map(({ id: { videoId }, snippet: { title, thumbnails, channelTitle } }, index) => (
                    <VideoCard
                      index={index}
                      key={`${videoId}-${index}`}
                      id={videoId}
                      title={title}
                      channel={channelTitle}
                      thumbnail={thumbnails.medium.url}
                      onAddToPlaylist={handleAddToPlaylist}
                    />
                  ))}
                </ResultsContainer>
              </>
            )}
            {playlist.length > 0 && (
              <>
                <TitleSection>Playlist</TitleSection>

                <Droppable droppableId="playlist">
                  {(provided) => (
                    <ResultsContainer ref={provided.innerRef} {...provided.droppableProps}>
                      {playlistState.map((video, index) => (
                        <Draggable key={`${video.id}-${index}`} draggableId={`${video.id}-${index}`} index={index}>
                          {(provided) => (
                            <VideoCard
                              dndProvided={provided}
                              index={index}
                              onRemoveFromPlaylist={handleRemoveFromPlaylist}
                              {...video}
                            />
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ResultsContainer>
                  )}
                </Droppable>
              </>
            )}
          </>
        )}
      </Container>
    </DragDropContext>
  );
};

Playlist.propTypes = {
  onUpdatePlaylist: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Playlist;

import React, {
  useEffect, useState, useRef, FormEvent, ChangeEvent,
} from 'react';
import {
  DragDropContext, Droppable, Draggable, DraggableProvided, DroppableProvided, DropResult,
} from 'react-beautiful-dnd';

import { Hidden } from '@material-ui/core';
import { useStoreState } from 'easy-peasy';
import { Store } from 'store';

import Input from 'components/Input';
import Loader from 'components/Loader';
import useToast from 'hooks/useToast';
import { getVideoListByQuery } from 'services/search';
import { Video } from 'models/video';

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

type Props = {
  onUpdatePlaylist: (playlist: Video[]) => void,
  onClose: () => void,
}

const Playlist = ({ onUpdatePlaylist, onClose }: Props) => {
  const toast = useToast();
  const searchBarRef = useRef<HTMLInputElement>(null);

  const playlist: Video[] = useStoreState<Store>(state => state.playlist);
  const [playlistState, setPlaylistState] = useState(playlist);

  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Video[]>([]);

  useEffect(() => {
    setPlaylistState(playlist);
  }, [playlist]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
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

  const reorder = (startIndex: number, endIndex: number) => {
    const result = Array.from(playlist);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
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

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClickClear = () => {
    setQuery('');
    setShowResults(false);
  };

  const handleAddToPlaylist = (video: Video) => {
    const newPlaylist = [...playlist, video];
    onUpdatePlaylist(newPlaylist);
    setQuery('');
    setShowResults(false);
  };

  const handleRemoveFromPlaylist = (index: number) => {
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
                  {results.map((video, index) => (
                    <VideoCard
                      index={index}
                      key={`${video.id}-${index.toString()}`}
                      onAddToPlaylist={handleAddToPlaylist}
                      {...video}
                    />
                  ))}
                </ResultsContainer>
              </>
            )}
            {playlist.length > 0 && (
              <>
                <TitleSection>Playlist</TitleSection>

                <Droppable droppableId="playlist">
                  {(dropProvided: DroppableProvided) => (
                    <ResultsContainer ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
                      {playlistState.map((video, index) => (
                        <Draggable key={`${video.id}-${index.toString()}`} draggableId={`${video.id}-${index}`} index={index}>
                          {(dragProvided: DraggableProvided) => (
                            <VideoCard
                              dndProvided={dragProvided}
                              index={index}
                              onRemoveFromPlaylist={handleRemoveFromPlaylist}
                              {...video}
                            />
                          )}
                        </Draggable>
                      ))}
                      {dropProvided.placeholder}
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

export default Playlist;

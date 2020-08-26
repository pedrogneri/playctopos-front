import React, { useState } from 'react';

import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

import useToast from 'hooks/useToast';
import { getVideoListByQuery } from 'services/search';

import EmptyState from './components/EmptyState';
import VideoCard from './components/VideoCard';
import { Container, SearchBar, StyledInput, SearchIcon, ClearIcon, ResultsContainer } from './styles';

const Playlist = ({ playlist, onUpdatePlaylist }) => {
  const toast = useToast();

  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
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
        });
    }
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
  };

  const handleRemoveFromPlaylist = (index) => {
    playlist.splice(index, 1);
    console.log(playlist);
    onUpdatePlaylist(playlist);
  };

  return (
    <Container>
      <form onSubmit={handleSearch}>
        <SearchBar>
          <StyledInput value={query} onChange={handleChangeQuery} placeholder="Search something..." />
          {!showResults ? (
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          ) : (
            <IconButton type="button" onClick={handleClickClear}>
              <ClearIcon />
            </IconButton>
          )}
        </SearchBar>
      </form>
      <ResultsContainer>
        {!showResults && playlist.length === 0 && <EmptyState />}
        {!showResults
          ? playlist.map(({ id, title, thumbnail, channel }, index) => (
              <VideoCard
                index={index}
                key={`${id}-${index}`}
                id={id}
                title={title}
                channel={channel}
                thumbnail={thumbnail}
                onRemoveFromPlaylist={handleRemoveFromPlaylist}
              />
            ))
          : results.map(({ id: { videoId }, snippet: { title, thumbnails, channelTitle } }, index) => (
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
    </Container>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.object),
  onUpdatePlaylist: PropTypes.func.isRequired,
};

export default Playlist;

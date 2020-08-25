import React, { useState } from 'react';

import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

import useToast from 'hooks/useToast';
import { getVideoListByQuery } from 'services/search';

import EmptyState from './components/EmptyState';
import VideoCard from './components/VideoCard';
import { Container, SearchBar, StyledInput, SearchIcon, ClearIcon, ResultsContainer } from './styles';

const Playlist = ({ playlist, onAddToPlaylist }) => {
  const toast = useToast();

  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      getVideoListByQuery(query)
        .then((videoList) => {
          setShowResults(true);
          setResults(videoList);
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
          ? playlist.map(({ id, title, thumbnail, channel }) => (
              <VideoCard
                key={id}
                id={id}
                title={title}
                channel={channel}
                thumbnail={thumbnail}
                onAddToPlaylist={onAddToPlaylist}
              />
            ))
          : results.map(({ id: { videoId }, snippet: { title, thumbnails, channelTitle } }) => (
              <VideoCard
                key={videoId}
                id={videoId}
                title={title}
                channel={channelTitle}
                thumbnail={thumbnails.medium.url}
                onAddToPlaylist={onAddToPlaylist}
              />
            ))}
      </ResultsContainer>
    </Container>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.object),
  onAddToPlaylist: PropTypes.func.isRequired,
};

export default Playlist;

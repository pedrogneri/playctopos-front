import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { useToast } from 'hooks/useToast';
import { getVideoListByQuery } from 'services/search';

import VideoCard from './components/VideoCard';
import { Container, SearchBar, StyledInput, SubmitButton, SearchIcon, ResultsContainer } from './styles';

const Search = ({ onAddToPlaylist }) => {
  const toast = useToast();

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      getVideoListByQuery(query)
        .then((videoList) => {
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

  return (
    <Container>
      <form onSubmit={handleSearch}>
        <SearchBar>
          <StyledInput value={query} onChange={handleChangeQuery} placeholder="Search something..." />
          <SubmitButton type="submit">
            <SearchIcon />
          </SubmitButton>
        </SearchBar>
      </form>
      <ResultsContainer>
        {results.map(({ id: { videoId }, snippet: { title, thumbnails, channelTitle } }) => (
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

Search.propTypes = {
  onAddToPlaylist: PropTypes.func.isRequired,
};

export default Search;

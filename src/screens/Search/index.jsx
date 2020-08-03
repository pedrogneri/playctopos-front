import React, { useState } from 'react';
import { getVideoListByQuery } from '../../services/search';

import VideoCard from './components/VideoCard';

import {
  Container,
  SearchBar,
  StyledInput,
  SubmitButton,
  SearchIcon,
  ResultsContainer,
} from './styles';

const Search = () => {
  const [query, setQuery] = useState();
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    if(query.trim()) {
      getVideoListByQuery(query).then((videoList) => {
        setResults(videoList);
      }).catch((err) => {
        console.log(err);
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
          <StyledInput
            value={query}
            onChange={handleChangeQuery}
            placeholder="Search something..."
          />
          <SubmitButton type="submit">
            <SearchIcon />
          </SubmitButton>
        </SearchBar>
      </form>
      <ResultsContainer>
        {results.map(({ id: { videoId }, snippet: { title, thumbnails, channelTitle } }) => (
          <VideoCard 
            id={videoId}
            title={title}
            channel={channelTitle}
            thumbnail={thumbnails.medium.url}
          />
        ))}
      </ResultsContainer>
    </Container>
  );
};

export default Search;

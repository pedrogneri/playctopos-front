import React, { useState } from 'react';
import { getVideoListByQuery } from '../../services/search';

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
        {results.map(({ id, snippet: { title, thumbnails } }) => (
          <div key={id}>
            <img height="100px" width="200px" src={thumbnails.medium.url} alt={`${title}-thumbnail`} />
            <p>{title}</p>
          </div>
        ))}
      </ResultsContainer>
    </Container>
  );
};

export default Search;

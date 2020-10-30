import React, { useEffect, useState, useRef } from 'react';

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
  HeaderContainer,
  PlusIcon,
  HeaderText,
  StyledForm,
} from './styles';

const Playlist = ({ playlist, onUpdatePlaylist }) => {
  const toast = useToast();
  const searchBarRef = useRef();

  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!!searchBarRef.current) searchBarRef.current.focus();
  }, [showSearch]);

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

  const handleChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleClickClear = () => {
    setQuery('');
    setShowResults(false);
    setShowSearch(false);
  };

  const handleAddToPlaylist = (video) => {
    const newPlaylist = [...playlist, video];
    onUpdatePlaylist(newPlaylist);
    setQuery('');
    setShowResults(false);
    setShowSearch(false);
  };

  const handleRemoveFromPlaylist = (index) => {
    playlist.splice(index, 1);
    onUpdatePlaylist(playlist);
  };

  const handleShowSearchBar = () => {
    setShowSearch(true);
  };

  const handleSearchBarBlur = () => {
    if (!showResults) {
      setShowSearch(false);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        {showSearch ? (
          <StyledForm onSubmit={handleSearch}>
            <Input
              inputRef={searchBarRef}
              value={query}
              onChange={handleChangeQuery}
              onBlur={handleSearchBarBlur}
              placeholder="Search something..."
              onClick={showResults && handleClickClear}
              endAdornment={showResults ? <ClearIcon /> : <SearchIcon />}
            />
          </StyledForm>
        ) : (
          <>
            <HeaderText>Room playlist</HeaderText>
            <PlusIcon onClick={handleShowSearchBar} />
          </>
        )}
      </HeaderContainer>
      {loading ? (
        <Loader />
      ) : (
        <ResultsContainer>
          {!showResults && playlist.length === 0 && <EmptyState />}
          {!showResults
            ? playlist.map((video, index) => (
                <VideoCard
                  index={index}
                  key={`${video.id}-${index}`}
                  onRemoveFromPlaylist={handleRemoveFromPlaylist}
                  {...video}
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
      )}
    </Container>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.object),
  onUpdatePlaylist: PropTypes.func.isRequired,
};

export default Playlist;

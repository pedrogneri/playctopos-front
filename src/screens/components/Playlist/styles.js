import { AiOutlineSearch } from 'react-icons/ai';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  width: 500px;
  max-width: 90%;
  height: 500px;
  border-radius: 12px;
  padding: 12px;
  background-color: #313131;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 16px;
  background-color: #424242;
`;

export const StyledInput = styled.input`
  padding: 12px;
  border: none;
  background-color: transparent;
  color: #fff;
  width: calc(100% - 40px);
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 30px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 25px;
  height: 25px;
  color: #ca3e47;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  overflow-y: auto;
`;

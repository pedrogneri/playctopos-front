import { AiOutlineSearch, AiFillCloseCircle, AiFillPlusCircle } from 'react-icons/ai';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.primary.dark};
  border-right: 2px solid ${({ theme }) => theme.primary.default};
`;

export const SearchIcon = styled(AiOutlineSearch)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.secondary.default};
`;

export const ClearIcon = styled(AiFillCloseCircle)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.secondary.default};
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding: 0 16px 16px;
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  min-height: 83px;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.primary.default};
`;

export const ExpandButton = styled.div`
  position: absolute;
  right: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  font-size: 25px;
  margin-right: -15px;

  cursor: pointer;
  color: #fff;
  background-color: ${({ theme }) => theme.primary.light};
`;

export const HeaderText = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.white};
`;

export const PlusIcon = styled(AiFillPlusCircle)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.secondary.default};
  cursor: pointer;
`;

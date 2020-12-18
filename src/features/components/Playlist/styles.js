import { AiOutlineSearch, AiFillCloseCircle, AiFillPlusCircle, AiOutlineArrowLeft } from 'react-icons/ai';

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
  overflow-y: auto;
  padding: 0 16px 16px;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.primary.light};
  color: #fff;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const CloseButton = styled(AiOutlineArrowLeft)`
  margin-right: 12px;
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.white};
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

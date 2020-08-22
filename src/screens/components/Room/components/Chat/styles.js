import { FaUserCircle } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #313131;
`;

export const MessagesArea = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px 20px 0 20px;
  height: calc(100% - 60px);
`;

export const Message = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  color: #fff;
  overflow-wrap: break-word;

  & > b {
    font-weight: 600;
    color: ${({ color }) => color};
  }
`;

export const Warn = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  font-style: italic;
  color: #999;
  overflow-wrap: break-word;
`;

export const ChatHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 16px;
  font-size: 18px;
  color: #fff;
  border-bottom: 2px solid #424242;
`;

export const UserIcon = styled(FaUserCircle)`
  color: #fff !important;
  margin-left: auto;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  padding: 10px;
`;

export const StyledInput = styled.input`
  padding: 14px;
  border: none;
  background-color: transparent;
  color: #fff;
  width: calc(100% - 40px);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: #424242;
`;

export const StyledIconButton = styled(IconButton)`
  padding: 5px !important;
`;

export const SendIcon = styled(IoMdSend)`
  width: 25px;
  height: 25px;
  color: #ca3e47;
`;

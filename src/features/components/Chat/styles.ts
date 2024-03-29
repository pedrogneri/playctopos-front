import { FaUserCircle } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

import styled from 'styled-components';

type MessageProps = {
  $color?: string,
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.primary.dark};
  border-left: 2px solid ${({ theme }) => theme.primary.default};
`;

export const MessagesArea = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px 20px 0 20px;
  height: calc(100% - 60px);
`;

export const Message = styled.p<MessageProps>`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.white};
  overflow-wrap: break-word;

  & > b {
    font-weight: 600;
    color: ${({ $color }) => $color};
  }
`;

export const Warn = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  font-style: italic;
  color: ${({ theme }) => theme.gray};
  overflow-wrap: break-word;
`;

export const ChatHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.white};
  border-bottom: 2px solid ${({ theme }) => theme.primary.default};
`;

export const UserIcon = styled(FaUserCircle)`
  color: ${({ theme }) => theme.white} !important;
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

export const SendIcon = styled(IoMdSend)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.secondary.default};
`;

import { IoMdSend } from 'react-icons/io';

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
  font-size: 16px;
  margin-bottom: 20px;
  color: #fff;
  overflow-wrap: break-word;

  & > b {
    color: #ca3e47;
  }
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
  border-radius: 16px;
  background-color: #424242;
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 30px;
`;

export const SendIcon = styled(IoMdSend)`
  width: 25px;
  height: 25px;
  color: #ca3e47;
`;

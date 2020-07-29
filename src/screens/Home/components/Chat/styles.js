import styled from 'styled-components';
import { IoIosSend } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #313131;
`;

export const MessagesArea = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 20px 20px 0 20px;
  height: 90%;
`;

export const Message = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #fff;

  & > b {
    color: #82cc7e;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 10%;
  max-height: 10%;
  padding: 10px;
`;

export const StyledInput = styled.input`
  padding: 14px;
  border: none;
  background-color: transparent;
  color: #fff;
  width: 90%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  background-color: #424242;
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 10%;
  padding: 5px;
`;

export const SendIcon = styled(IoIosSend)`
  width: 100%;
  height: 100%;
  color: #ca3e47;
`;

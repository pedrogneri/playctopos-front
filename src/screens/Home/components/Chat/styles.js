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

export const InputContainer = styled.div`
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
  border-radius: 16px;
  border: none;
  background-color: #424242;
  color: #fff;
  width: 100%;
`;

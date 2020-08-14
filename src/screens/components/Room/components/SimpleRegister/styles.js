import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  background-color: #313131;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #ca3e47;
  background-color: transparent;
  border-radius: 24px;
  border: 2px solid #ca3e47;
  padding: 12px;
  width: 60%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  width: 100%;
  font-weight: 600;
  color: #fff;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  color: #fff;
  background-color: #414141;
  border: none;
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 14px;
  width: 100%;
`;

export const UserIcon = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 100%;
  background-color: #ddd;
`;

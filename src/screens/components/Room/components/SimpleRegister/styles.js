import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.primary.dark};
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary.default};
  background-color: transparent;
  border-radius: 24px;
  border: 2px solid ${({ theme }) => theme.secondary.default};
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
  color: ${({ theme }) => theme.white};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary.default};
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

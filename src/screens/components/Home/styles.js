import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.primary.dark};
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

  margin-top: 20px;
  max-width: 150px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const WelcomeMessage = styled.i`
  font-size: 20vw;
  color: ${({ theme }) => theme.white};
  font-weight: 900;
  text-shadow: -1vw 1vw 0px #d5666d, -2vw 2vw 0px #ca3e47;
`;

export const StyledInput = styled.input`
  font-size: 16px;
  padding: 14px;
  max-width: 300px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  width: calc(100% - 40px);
  border-bottom: 2px solid ${({ theme }) => theme.white};
`;

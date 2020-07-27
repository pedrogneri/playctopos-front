import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100vh;
  padding: 16px;

  @media (max-width: 800px) {
    height: 50%;
    width: 100%;
    padding: 0;
    justify-content: flex-start;
  }
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 50%;
  pointer-events: none;
  border: none;
`;

export const Input = styled.input`
  padding: 5px;
  margin-bottom: 16px;
  max-width: 50%;
`;

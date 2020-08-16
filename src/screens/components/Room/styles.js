import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #424242;
  overflow: auto;

  @media (max-width: 959px) {
    flex-direction: column;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media (min-width: 960px) {
    overflow-y: auto;
  }

  @media (max-width: 959px) {
    width: 100%;
    height: 30%;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  width: 25%;
  min-width: 300px;
  max-width: 400px;
  height: 100vh;

  @media (max-width: 959px) {
    width: 100%;
    max-width: 100%;
    height: 70%;
  }
`;

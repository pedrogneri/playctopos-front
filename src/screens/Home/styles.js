import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #424242;
  overflow: auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100vh;

  @media (max-width: 800px) {
    width: 100%;
    height: 30%;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  width: 25%;
  height: 100vh;

  @media (max-width: 800px) {
    width: 100%;
    height: 70%;
  }
`;

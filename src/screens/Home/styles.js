import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #121212;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100vh;

  @media (max-width: 800px) {
    height: 50%;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const VideoMask = styled.div`
  width: 100%;
  height: 60%;
  background-color: #121200;
  opacity: .5;
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 60%;
  pointer-events: none;
  border: none;
`;

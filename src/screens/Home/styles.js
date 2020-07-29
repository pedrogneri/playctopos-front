import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #313131;

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
  display: flex;
  width: 100%;
  height: 60%;
  background-color: #414141;
  justify-content: center;
  align-items: center;
`;

export const VideoPlaceholder = styled.p`
  font-size: 36px;
  color: #ddd;
  text-align: center;
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 60%;
  pointer-events: none;
  border: none;
`;

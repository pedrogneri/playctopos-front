import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #313131;

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
  }
`;

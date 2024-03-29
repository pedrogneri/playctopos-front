import styled from 'styled-components';

type ContainerProps = {
  $show: boolean,
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary.default};
  overflow-x: hidden;
  overflow-y: auto;

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

export const ChatContainer = styled.div<ContainerProps>`
  display: flex;
  width: 25%;
  min-width: 300px;
  max-width: 300px;
  height: 100vh;
  margin-right: ${({ $show }) => ($show ? '0' : '-280px')};
  transition: margin-right 0.6s;
  position: relative;

  @media (max-width: 959px) {
    width: 100%;
    max-width: 100%;
    height: 70%;
  }
`;

export const PlaylistContainer = styled.div<ContainerProps>`
  display: flex;
  width: 25%;
  min-width: 300px;
  max-width: 300px;
  height: 100vh;
  margin-left: ${({ $show }) => ($show ? '0' : '-280px')};
  transition: margin-left 0.6s;
  position: relative;
`;

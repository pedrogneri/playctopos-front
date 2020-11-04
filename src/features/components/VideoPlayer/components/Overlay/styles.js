import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 16px;

  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(17, 17, 17, 0.8));
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

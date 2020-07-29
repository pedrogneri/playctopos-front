import styled from 'styled-components';

export const Placeholder = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  background-color: #414141;
  justify-content: center;
  align-items: center;
`;

Placeholder.Text = styled.p`
  font-size: 36px;
  color: #ddd;
  text-align: center;
`;

export const Player = styled.iframe`
  width: 100%;
  height: 60%;
  pointer-events: none;
  border: none;
`;

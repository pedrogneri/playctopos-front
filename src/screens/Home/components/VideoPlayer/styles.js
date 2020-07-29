import styled, { css } from 'styled-components';

export const PlayerStyle = css`
  width: 100%;
  height: 80%;

  @media (max-width: 800px) {
    height: 30%;
  }
`;

export const Placeholder = styled.div`
  display: flex;
  background-color: #414141;
  justify-content: center;
  align-items: center;

  ${PlayerStyle}
`;

Placeholder.Text = styled.p`
  font-size: 36px;
  color: #ddd;
  text-align: center;
`;

export const Player = styled.iframe`
  pointer-events: none;
  border: none;

  ${PlayerStyle}
`;

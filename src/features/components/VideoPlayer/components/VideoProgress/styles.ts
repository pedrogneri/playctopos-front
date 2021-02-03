import styled from 'styled-components';

type ProgressBarProps = {
  $value: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 5px;
`;

export const BaseBar = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primary.default};
  width: 100%;
  height: 100%;
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  width: ${({ $value }) => `${$value}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.secondary.default};
  transition: width 1s;
`;

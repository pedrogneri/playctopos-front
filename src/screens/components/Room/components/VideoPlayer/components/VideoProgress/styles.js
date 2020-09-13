import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 5px;
  margin-top: 10px;
`;

export const BaseBar = styled.div`
  display: flex;
  border-radius: 12px;
  background-color: #666;
  width: 100%;
  height: 100%;
`;

export const ProgressBar = styled.div`
  width: ${({ value }) => `${value}%`};
  height: 100%;
  background-color: #ca3e47;
  border-radius: 12px;
  transition: width 1s;
`;

export const TimeLabel = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 12px;
  margin: 0 12px;
`;

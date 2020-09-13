import { MdOndemandVideo } from 'react-icons/md';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  min-width: 150px;
  border-radius: 100%;

  background-color: ${({ theme }) => theme.primary.default};
`;

export const Icon = styled(MdOndemandVideo)`
  width: 80px;
  height: 80px;
  color: #313131;
`;

export const Text = styled.h3`
  margin-top: 5%;
  color: #525252;
  font-weight: 600;
`;

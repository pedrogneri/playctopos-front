import { FaRegSadCry } from 'react-icons/fa';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
`;

export const SadIcon = styled(FaRegSadCry)`
  width: 100px;
  height: 100px;
  color: #666;
`;

export const Text = styled.h3`
  margin-top: 10%;
  color: #666;
  font-weight: 600;
`;

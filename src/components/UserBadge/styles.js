import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px 0;
`;

export const UserLabel = styled.div`
  border-radius: 12px;
  padding: 6px;
  font-size: 10px;

  border: 1px solid ${({ theme }) => theme.secondary.default};
  color: ${({ theme }) => theme.secondary.default};

  max-width: max-content;
`;

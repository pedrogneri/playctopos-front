import styled from 'styled-components';

export const InfoContainer = styled.div`
  padding-left: 12px;
  max-width: calc(100% - 100px);
`;

export const Title = styled.h5`
  color: ${({ theme }) => theme.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
`;

export const Subtitle = styled.h5`
  color: ${({ theme }) => theme.gray};
  font-weight: normal;
`;

Title.xs = styled.h5`
  color: ${({ theme }) => theme.white};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  font-weight: normal;
  text-overflow: ellipsis;
`;

Subtitle.xs = styled.h5`
  font-size: 12px;
  font-weight: normal;
  color: ${({ theme }) => theme.gray};
`;

export const Thumbnail = styled.img`
  width: 100%;
  max-width: 100px;
`;

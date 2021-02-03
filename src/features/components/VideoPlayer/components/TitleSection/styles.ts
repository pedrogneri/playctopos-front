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

  @media (max-width: 959px) {
    font-size: 12px;
  }
`;

export const Subtitle = styled.h5`
  color: ${({ theme }) => theme.gray};
  font-weight: normal;

  @media (max-width: 959px) {
    font-size: 12px;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  max-width: 100px;
`;

import { AiFillCloseCircle, AiFillPlusCircle } from 'react-icons/ai';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 12px 12px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.primary.default};
  }

  @media (max-width: 959px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  width: 100%;

  @media (max-width: 959px) {
    margin-top: 12px;
    margin-left: 0;
    max-width: 250px;
  }
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
`;

export const Channel = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.gray};
`;

export const Thumbnail = styled.img`
  height: 45px;
`;

export const IconContainer = styled.div`
  margin-left: auto;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  margin-top: auto;
`;

export const IconStyle = css`
  color: ${({ theme }) => theme.white};
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const AddIcon = styled(AiFillPlusCircle)`
  ${IconStyle}
`;

export const RemoveIcon = styled(AiFillCloseCircle)`
  ${IconStyle}
`;

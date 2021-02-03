import { AiFillCloseCircle, AiFillPlusCircle } from 'react-icons/ai';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: ${({ theme }) => theme.primary.dark};

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.primary.default};
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  max-width: 50%;
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

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
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

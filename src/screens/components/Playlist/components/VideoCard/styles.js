import { AiFillCloseCircle, AiFillPlusCircle } from 'react-icons/ai';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 12px 12px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #424242;
  }

  @media (max-width: 959px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #fff;
`;

export const Channel = styled.p`
  font-size: 10px;
  color: #fff;
`;

export const Thumbnail = styled.img`
  height: 125px;
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
  color: #fff;
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

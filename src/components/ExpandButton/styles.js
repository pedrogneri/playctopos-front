import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 20px;
  z-index: 2;
  ${({ fromLeft }) => (fromLeft ? 'right: -15px' : 'left: -15px')};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  font-size: 25px;

  cursor: pointer;
  color: #fff;
  background-color: ${({ theme }) => theme.primary.light};
`;

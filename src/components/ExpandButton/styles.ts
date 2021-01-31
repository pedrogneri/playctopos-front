import styled from 'styled-components';

type StyledProps = {
  $top: boolean,
  $left: boolean,
  $right: boolean,
}

export const Container = styled.div<StyledProps>`
  position: absolute;
  z-index: 2;
  ${({ $left, $right }) => ($left || $right ? 'top: 20px' : '')};
  ${({ $top }) => ($top ? 'margin: 0 calc(50% - 15px)' : '')};

  ${({ $top }) => ($top ? 'bottom: -15px' : '')};
  ${({ $left }) => ($left ? 'right: -15px' : '')};
  ${({ $right }) => ($right ? 'left: -15px' : '')};

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

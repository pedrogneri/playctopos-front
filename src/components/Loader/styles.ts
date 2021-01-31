import { CircularProgress, withStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  margin: auto;
`;

export const StyledLoading = withStyles({
  root: {
    color: '#ca3e47',
  },
})(CircularProgress);

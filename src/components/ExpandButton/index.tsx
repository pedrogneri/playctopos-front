import React from 'react';
import {
  MdKeyboardArrowRight as ArrowRight,
  MdKeyboardArrowLeft as ArrowLeft,
  MdKeyboardArrowDown as ArrowDown,
  MdKeyboardArrowUp as ArrowUp,
} from 'react-icons/md';

import { Tooltip } from '@material-ui/core';

import { Container } from './styles';

// TODO: Improve props and layout

type Props = {
  top: boolean,
  left: boolean,
  right: boolean,
  componentName: string,
  expanded: boolean,
  switchExpanded: () => void,
}

const ExpandButton = ({
  top, left, right, componentName, switchExpanded, expanded,
}: Props) => (
  <Tooltip title={`${expanded ? 'Close' : 'Open'} ${componentName}`} placement="bottom-end">
    <Container $top={top} $right={right} $left={left} onClick={switchExpanded}>
      {top && (expanded ? <ArrowUp /> : <ArrowDown />)}
      {left && (expanded ? <ArrowLeft /> : <ArrowRight />)}
      {right && (expanded ? <ArrowRight /> : <ArrowLeft />)}
    </Container>
  </Tooltip>
);

export default ExpandButton;

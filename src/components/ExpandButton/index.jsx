import React from 'react';
import {
  MdKeyboardArrowRight as ArrowRight,
  MdKeyboardArrowLeft as ArrowLeft,
  MdKeyboardArrowDown as ArrowDown,
  MdKeyboardArrowUp as ArrowUp,
} from 'react-icons/md';

import { Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Container } from './styles';

// TODO: Improve props and layout

const ExpandButton = ({ top, left, right, componentName, switchExpanded, expanded }) => {
  return (
    <Tooltip title={`${expanded ? 'Close' : 'Open'} ${componentName}`} placement="bottom-end">
      <Container top={top} right={right} left={left} onClick={switchExpanded}>
        {top && (expanded ? <ArrowUp /> : <ArrowDown />)}
        {left && (expanded ? <ArrowLeft /> : <ArrowRight />)}
        {right && (expanded ? <ArrowRight /> : <ArrowLeft />)}
      </Container>
    </Tooltip>
  );
};

ExpandButton.propTypes = {
  componentName: PropTypes.string.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  switchExpanded: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default ExpandButton;

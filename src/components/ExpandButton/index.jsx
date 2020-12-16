import React from 'react';
import { MdKeyboardArrowRight as ArrowRight, MdKeyboardArrowLeft as ArrowLeft } from 'react-icons/md';

import { Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Container } from './styles';

const ExpandButton = ({ componentName, fromLeft, fromRight, switchExpanded, expanded }) => {
  return (
    <Tooltip title={`${expanded ? 'Close' : 'Open'} ${componentName}`} placement="bottom-end">
      <Container fromRight={fromRight} fromLeft={fromLeft} onClick={switchExpanded}>
        {(expanded && fromLeft) || (!expanded && fromRight) ? <ArrowLeft /> : <ArrowRight />}
      </Container>
    </Tooltip>
  );
};

ExpandButton.propTypes = {
  componentName: PropTypes.string.isRequired,
  fromLeft: PropTypes.bool,
  fromRight: PropTypes.bool,
  switchExpanded: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default ExpandButton;

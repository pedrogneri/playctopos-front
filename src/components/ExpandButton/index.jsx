import React from 'react';
import { MdKeyboardArrowRight as ArrowRight, MdKeyboardArrowLeft as ArrowLeft } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Container } from './styles';

const ExpandButton = ({ fromLeft, fromRight, switchExpanded, expanded }) => {
  return (
    <Container fromRight={fromRight} fromLeft={fromLeft} onClick={switchExpanded}>
      {(expanded && fromLeft) || (!expanded && fromRight) ? <ArrowLeft /> : <ArrowRight />}
    </Container>
  );
};

ExpandButton.propTypes = {
  fromLeft: PropTypes.bool,
  fromRight: PropTypes.bool,
  switchExpanded: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default ExpandButton;

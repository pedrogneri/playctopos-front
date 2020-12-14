import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

const UserBadge = ({ username }) => {
  return <Container>{`Added by ${username}`}</Container>;
};

UserBadge.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserBadge;

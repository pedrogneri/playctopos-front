import React from 'react';

import PropTypes from 'prop-types';

import { Container, UserLabel } from './styles';

const UserBadge = ({ username }) => {
  return (
    <Container>
      <UserLabel>{`Added by ${username}`}</UserLabel>
    </Container>
  );
};

UserBadge.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserBadge;

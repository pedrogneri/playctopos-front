import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import socket from 'socket';

import Room from 'screens/components/Room';

const RoomContainer = ({ match: { params } }) => {
  const { id } = params;

  useEffect(() => {
    socket.emit('room.join', id);
  }, [id]);

  return <Room id={id} />;
};

RoomContainer.propTypes = {
  match: PropTypes.object,
};

export default RoomContainer;

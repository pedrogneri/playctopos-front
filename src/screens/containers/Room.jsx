import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import socket from 'socket';

import Room from 'screens/components/Room';
import { getUsername } from 'utils/username';

const RoomContainer = ({ match: { params } }) => {
  const { id } = params;

  useEffect(() => {
    const username = getUsername() || 'Someone';
    socket.emit('room.join', id);
    socket.emit('room.message', {
      roomId: id,
      message: { username, value: `${username} joined the party`, type: 'warn' },
    });
  }, [id]);

  return <Room id={id} />;
};

RoomContainer.propTypes = {
  match: PropTypes.object,
};

export default RoomContainer;

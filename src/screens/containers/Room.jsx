import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import Room from 'screens/components/Room';
import { sendWarn } from 'services/chat';
import { joinRoom } from 'services/room';
import { getUsername } from 'utils/username';

const RoomContainer = ({ match: { params } }) => {
  const { id } = params;

  useEffect(() => {
    const username = getUsername() || 'Someone';
    joinRoom(id);
    sendWarn(id, `${username} joined the party`);
  }, [id]);

  return <Room id={id} />;
};

RoomContainer.propTypes = {
  match: PropTypes.object,
};

export default RoomContainer;

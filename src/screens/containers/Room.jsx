import React, { useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import Room from 'screens/components/Room';
import { sendWarn } from 'services/chat';
import { joinRoom, getVideoUrlByRoom } from 'services/room';
import { getUsername } from 'utils/username';

const RoomContainer = ({ match: { params } }) => {
  const { id } = params;
  const history = useHistory();
  const [roomName, setRoomName] = useState('');

  const validateRoomId = useCallback(() => {
    getVideoUrlByRoom(id)
      .then((data) => {
        if (!data) {
          history.push('/');
        }
        setRoomName(data.room.name);
      })
      .catch(() => {
        history.push('/');
      });
  }, [id, history]);

  useEffect(() => {
    const username = getUsername() || 'Someone';
    validateRoomId();
    joinRoom(id);
    sendWarn(id, `${username} joined the party`);
  }, [id, validateRoomId]);

  return <Room id={id} name={roomName} />;
};

RoomContainer.propTypes = {
  match: PropTypes.object,
};

export default RoomContainer;

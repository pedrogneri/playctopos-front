import React, { useEffect, useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Room from 'screens/components/Room';
import { sendWarn } from 'services/chat';
import { joinRoom, getVideoUrlByRoom } from 'services/room';
import { getUsername } from 'utils/username';

type Params = {
  id: string,
}

const RoomContainer = () => {
  const { id } = useParams<Params>();
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

export default RoomContainer;

import React from 'react';
import { useHistory } from 'react-router-dom';

import useToast from 'hooks/useToast';
import Home from 'screens/components/Home';
import { getRoomByName } from 'services/room';

const HomeContainer = () => {
  const toast = useToast();
  const history = useHistory();

  const handleEnterRoom = (roomName) => {
    if (roomName.trim()) {
      getRoomByName(roomName)
        .then((room) => {
          if (!!room) {
            history.push(`room/${room._id}`);
          } else {
            toast.add({ type: 'warning', message: 'Invalid room name' });
          }
        })
        .catch(() => {
          toast.add({ type: 'error' });
        });
    }
  };

  return <Home onSubmitRoomName={handleEnterRoom} />;
};

export default HomeContainer;

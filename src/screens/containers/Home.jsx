import React from 'react';
import { useHistory } from 'react-router-dom';

import Home from 'screens/components/Home';
import { getRoomByName } from 'services/room';

const HomeContainer = () => {
  const history = useHistory();

  const handleEnterRoom = (roomName) => {
    if (roomName.trim()) {
      getRoomByName(roomName).then((room) => {
        if (!!room) history.push(`room/${room._id}`);
      });
    }
  };

  return <Home onSubmitRoomName={handleEnterRoom} />;
};

export default HomeContainer;

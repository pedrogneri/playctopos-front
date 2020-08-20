import React from 'react';
import { useHistory } from 'react-router-dom';

import Home from 'screens/components/Home';

const HomeContainer = () => {
  const history = useHistory();

  const handleEnterRoom = (roomId) => {
    if (roomId.trim()) {
      history.push(`room/${roomId}`);
    }
  };

  return <Home onSubmitRoomId={handleEnterRoom} />;
};

export default HomeContainer;

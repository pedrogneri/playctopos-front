import api from 'api';
import socket from 'socket';

export const joinRoom = (id) => {
  socket.emit('room.join', id);
};

export const getRoomByName = async (name) => {
  const response = await api.get('/getRoomByName', {
    params: {
      name,
    },
  });
  return response.data;
};

export const updateActualVideo = async (id, actualVideo) => {
  const response = await api.put('/actualVideo', actualVideo, {
    params: {
      id,
    },
  });
  return response.data;
};

export const updatePlaylist = async (id, playlist) => {
  const response = await api.put('/playlist', playlist, {
    params: {
      id,
    },
  });
  return response.data;
};

export const getVideoUrlByRoom = async (id) => {
  const response = await api.get('/getVideoUrlByRoom', {
    params: {
      id,
    },
  });
  return response.data;
};

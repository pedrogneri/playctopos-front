import { get, put } from 'axios';
import socket from 'socket';

const baseURL = process.env.REACT_APP_API;

export const joinRoom = (id) => {
  socket.emit('room.join', id);
};

export const getRoomByName = async (name) => {
  const response = await get(`${baseURL}/getRoomByName`, {
    params: {
      name,
    },
  });
  return response.data;
};

export const updateActualVideo = async (id, actualVideo) => {
  const response = await put(`${baseURL}/actualVideo`, actualVideo, {
    params: {
      id,
    },
  });
  return response.data;
};

export const updatePlaylist = async (id, playlist) => {
  const response = await put(`${baseURL}/playlist`, playlist, {
    params: {
      id,
    },
  });
  return response.data;
};

export const getVideoUrlByRoom = async (id) => {
  const response = await get(`${baseURL}/getVideoUrlByRoom`, {
    params: {
      id,
    },
  });
  return response.data;
};

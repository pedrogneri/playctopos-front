import { get, put } from 'axios';
import socket from 'socket';

const baseURL = process.env.REACT_APP_API;

export const joinRoom = (id) => {
  socket.emit('room.join', id);
};

export const getRoomById = async (id) => {
  const response = await get(`${baseURL}/room`, {
    params: {
      id,
    },
  });
  return response.data;
};

export const getRoomByName = async (name) => {
  const response = await get(`${baseURL}/getRoomByName`, {
    params: {
      name,
    },
  });
  return response.data;
};

export const updateRoom = async (id, room) => {
  const response = await put(`${baseURL}/room`, room, {
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

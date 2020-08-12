import { get, put } from 'axios';

const baseURL = process.env.REACT_APP_API;

export const getRoom = async (id) => {
  const response = await get(`${baseURL}/room`, {
    params: {
      id,
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

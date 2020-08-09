import { get, post } from 'axios';

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
  const response = await post(`${baseURL}/room?id=${id}`, room, {
    params: {
      id,
    },
  });
  return response.data;
};

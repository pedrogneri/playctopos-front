import { get } from 'axios';

const baseURL = process.env.REACT_APP_API;

export const getVideoListByQuery = async (query) => {
  const response = await get(`${baseURL}/searchByQuery`, {
    params: {
      query,
    },
  });
  return response.data;
};

export const getVideoById = async (id) => {
  const response = await get(`${baseURL}/searchById`, {
    params: {
      id,
    },
  });
  return response.data;
};

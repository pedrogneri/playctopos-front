import api from 'api';

export const getVideoListByQuery = async (query) => {
  const response = await api.get('/searchByQuery', {
    params: {
      query,
    },
  });
  return response.data;
};

export const getVideoById = async (id) => {
  const response = await api.get('/searchById', {
    params: {
      id,
    },
  });
  return response.data;
};

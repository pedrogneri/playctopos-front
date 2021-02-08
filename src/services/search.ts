import api from 'api';
import { Video } from 'models/video';

export const getVideoListByQuery = async (query: string) => {
  const response = await api.get<Video[]>('/searchByQuery', {
    params: {
      query,
    },
  });
  return response.data;
};

export const getVideoById = async (id: string) => {
  const response = await api.get<Video>('/searchById', {
    params: {
      id,
    },
  });
  return response.data;
};

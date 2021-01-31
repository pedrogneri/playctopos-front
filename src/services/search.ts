import api from 'api';
import { YoutubeVideoResponse } from 'models/video';

export const getVideoListByQuery = async (query: string) => {
  const response = await api.get<YoutubeVideoResponse[]>('/searchByQuery', {
    params: {
      query,
    },
  });
  return response.data;
};

export const getVideoById = async (id: string) => {
  const response = await api.get<YoutubeVideoResponse>('/searchById', {
    params: {
      id,
    },
  });
  return response.data;
};

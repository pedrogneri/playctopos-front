import api from 'api';
import socket from 'socket';
import { Video } from 'models/video';
import { Room, RoomResponse } from 'models/room';

export const joinRoom = (id: string) => {
  socket.emit('room.join', id);
};

export const getRoomByName = async (name: string) => {
  const response = await api.get<Room>('/getRoomByName', {
    params: {
      name,
    },
  });
  return response.data;
};

export const updateActualVideo = async (id: string, actualVideo: Video) => {
  const response = await api.put<Video>('/actualVideo', actualVideo, {
    params: {
      id,
    },
  });
  return response.data;
};

export const updatePlaylist = async (id: string, playlist: Video[]) => {
  const response = await api.put<Video[]>('/playlist', playlist, {
    params: {
      id,
    },
  });
  return response.data;
};

export const getVideoUrlByRoom = async (id: string) => {
  const response = await api.get<RoomResponse>('/getVideoUrlByRoom', {
    params: {
      id,
    },
  });
  return response.data;
};

import { Video } from 'models/video';

export interface Room {
  _id: string,
  name: string,
  lastPlayDate: number,
  actualVideo: Video,
  playlist: Video[],
}

export interface RoomResponse {
  room: Room,
  url: string,
}

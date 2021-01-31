import { Video } from 'models/video';

export interface Room {
  name: string,
  lastPlayDate: number,
  actualVideo: Video,
  playlist: Video[],
}

export interface RoomResponse {
  room: Room,
  url: string,
}

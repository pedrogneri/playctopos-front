import { Video } from 'models/video'

export interface Room {
  name: string,
  lastPlayDate: number,
  actualVideo: Video,
  playlist: Video[],
}

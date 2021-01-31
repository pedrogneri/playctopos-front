export interface Video {
  id: string,
  title: string,
  channel: string,
  thumbnail: string,
  duration?: number,
  addedBy?: string,
}

interface YoutubeThumbResponse {
  url: string,
  width: number,
  height: number
}

export interface YoutubeVideoResponse {
  id: { videoId: string },
  snippet: {
    title: string,
    description: string,
    thumbnails: {
      default: YoutubeThumbResponse,
      medium: YoutubeThumbResponse,
      high: YoutubeThumbResponse,
    },
    channelTitle: string,
  }
}

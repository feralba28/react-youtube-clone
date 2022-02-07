type VideoPreviewItem = {
  id: {
    kind: string,
    videoId: string
  },
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      high: {
        url: string,
        width: number,
        height: number
      }
    }
    channelTitle: string
  }
}

export default VideoPreviewItem

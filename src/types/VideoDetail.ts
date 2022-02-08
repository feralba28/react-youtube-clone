type VideoDetail = {
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    channelTitle: string,
    title: string,
    description: string,
    thumbnails: {
      high: {
        url: string,
        width: number,
        height: number,
      }
    },
    tags: Array<String>
  },
  contentDetails: {
    duration: string,
  },
  statistics: {
    commentCount: string,
    likeCount: string,
    viewCount: string,
  },
}

export default VideoDetail

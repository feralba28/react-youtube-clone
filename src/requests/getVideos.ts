import { AxiosRequestConfig } from 'axios'

function getVideos({ id }: { id: string }): AxiosRequestConfig {
  return {
    method: 'get',
    baseURL: process.env.NEXT_PUBLIC_YOUTUBE_API_BASE_URL,
    url: '/videos',
    params: {
      id: id,
      type: 'video',
      part: 'id,snippet,contentDetails,statistics,player',
      fields:
        'items(id,snippet(publishedAt,channelId,title,description,thumbnails(high),channelTitle,tags),contentDetails(duration),statistics(viewCount,likeCount,commentCount))',
      key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
    },
  }
}

export default getVideos

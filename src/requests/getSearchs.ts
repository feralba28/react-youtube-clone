import { AxiosRequestConfig } from 'axios'

function getSearchs({ keyword }: { keyword: string }): AxiosRequestConfig {
  return {
    method: 'get',
    baseURL: process.env.NEXT_PUBLIC_YOUTUBE_API_BASE_URL,
    url: '/search',
    params: {
      q: keyword,
      type: 'video',
      part: 'id,snippet',
      fields:
        'etag,nextPageToken,items(id,snippet(publishedAt,channelId,title,description,thumbnails(high),channelTitle))',
      maxResults: '3',
      key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
    }
  }
}

export default getSearchs

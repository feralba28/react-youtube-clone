function getSearchs({ keyword }) {
  return {
    method: 'get',
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

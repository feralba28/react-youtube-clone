import VideoPreviewItem from "./VideoPreviewItem"

type SearchResponse = {
  etag: string,
  nextPageToken: string,
  items: Array<VideoPreviewItem>
}

export default  SearchResponse

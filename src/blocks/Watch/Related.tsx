import { useEffect, useState } from 'react'
import { AxiosRequestConfig } from 'axios'
import useFetch from '../../hooks/useFetch'
import getRelated from '../../requests/getRelated'

import SearchResponse from '../../types/SearchResponse'
import VideoPreview from '../../components/VideoPreview/VideoPreview'

function Related(props: { id: string }) {
  const { id } = props

  const [relatedRequest, setRelatedRequest] =
    useState<AxiosRequestConfig | null>(null)

  const {
    response: { data: relatedResponse },
  } = useFetch<SearchResponse>(relatedRequest)

  useEffect(() => {
    setRelatedRequest(getRelated({ id }))
  }, [id])

  const followingText = 'Siguiente'

  return (
    <div className="container p-none">
      <div className="row p-2 py-3">
        <p className="fs-14 fw-400 color-black">{followingText}</p>
      </div>
      {relatedResponse &&
        relatedResponse.items.map((item) =>
          item.snippet ? (
            <VideoPreview item={item} key={item.id.videoId} />
          ) : null
        )}
    </div>
  )
}

export default Related

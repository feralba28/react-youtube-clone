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
    <div className="grow px-3">
      <div className="py-1.5">
        <p className="text-sm pt-1.5">{followingText}</p>
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

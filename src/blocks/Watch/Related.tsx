import { useEffect, useState } from 'react'
import { AxiosRequestConfig } from 'axios'
import useFetch from '../../hooks/useFetch'
import getRelated from '../../requests/getRelated'

import SearchResponse from '../../types/SearchResponse'
import RelatedItem from '../../components/RelatedItem'

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
    <div className="grow px-3 flex flex-col gap-3 order-2 border-t md:px-0 lg:border-0">
      <div className="lg:hidden">
        <p className="text-sm pt-3">{followingText}</p>
      </div>
      {relatedResponse &&
        relatedResponse.items.map((item) =>
          item.snippet ? (
            <RelatedItem item={item} key={item.id.videoId} />
          ) : null
        )}
    </div>
  )
}

export default Related

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AxiosRequestConfig } from 'axios'

import SearchPageLayout from '../../layouts/SearchPageLayout'
import HorizontalVideoPreview from '../../components/HorizontalVideoPreview'
import Loader from '../../components/HorizontalVideoPreviewLoader'
import ErrorView from '../../components/ErrorView/ErrorView'

import getSearchs from '../../requests/getSearchs'
import useFetch from '../../hooks/useFetch'

import SearchResponse from '../../types/SearchResponse'

function SearchPage() {
  const {
    query: { query },
  } = useRouter()

  const [searchRequest, setSearchRequest] = useState<AxiosRequestConfig | null>(
    null
  )
  const {
    isLoading,
    response: { data: searchResponse },
    isError,
  } = useFetch<SearchResponse>(searchRequest)

  useEffect(() => {
    if (query) {
      setSearchRequest(getSearchs({ keyword: query as string }))
    }
  }, [query])

  return (
    <SearchPageLayout>
      {isLoading &&
        [1, 2, 3, 4, 5].map((i) => (
          <div className="d-flex" key={i}>
            <Loader />
          </div>
        ))}

      {searchResponse &&
        searchResponse.items.map((item) => (
          <HorizontalVideoPreview item={item} key={item.id.videoId} />
        ))}

      {isError && <ErrorView />}
    </SearchPageLayout>
  )
}

export default SearchPage

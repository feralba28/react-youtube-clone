import { useState, useEffect } from 'react'
import Head from 'next/head'

import VideoPreview from '../components/VideoPreview/VideoPreview'
import VideoPreviewLoader from '../components/VideoPreviewLoader/VideoPreviewLoader'
import ErrorView from '../components/ErrorView/ErrorView'
import WebsiteLayout from '../layouts/WebsiteLayout'

import getSearchs from '../requests/getSearchs'
import useFetch from '../hooks/useFetch'

import SearchResponse from '../types/SearchResponse'

function Home() {
  const [keyword, setKeyword] = useState('')
  const [searchRequest, setSearchRequest] = useState(
    getSearchs({ keyword: '' })
  )
  const {
    isLoading,
    response: { data: searchResponse },
    isError,
  } = useFetch<SearchResponse>(searchRequest)

  useEffect(() => {
    if (keyword) {
      setSearchRequest(getSearchs({ keyword }))
      window.scrollTo(0, 0)
    }
  }, [keyword])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <WebsiteLayout>
        {isLoading &&
          [1, 2, 3].map((i) => (
            <div className="d-flex" key={i}>
              <VideoPreviewLoader />
            </div>
          ))}

        {searchResponse &&
          searchResponse.items.map((item) => (
            <VideoPreview item={item} key={item.id.videoId} />
          ))}

        {isError && <ErrorView />}
      </WebsiteLayout>
    </>
  )
}

export default Home

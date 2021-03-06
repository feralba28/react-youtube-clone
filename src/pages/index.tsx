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
        <div className='py-2 grid gap-4 grid-cols-1 sm:grid-cols-2 sm:p-4 md:grid-cols-3 xl:grid-cols-4 xl:p-5 lg:max-w-screen-2xl lg:mx-auto'>
          {isLoading &&
            [1, 2, 3, 4, 5, 6].map((i) => (
              <div className="flex" key={i}>
                <VideoPreviewLoader />
              </div>
            ))}

          {searchResponse &&
            searchResponse.items.map((item) => (
              <VideoPreview item={item} key={item.id.videoId} />
            ))}
        </div>

        {isError && <ErrorView />}
      </WebsiteLayout>
    </>
  )
}

export default Home

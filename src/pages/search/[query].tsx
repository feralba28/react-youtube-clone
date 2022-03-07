import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AxiosRequestConfig } from 'axios'
import Head from 'next/head'

import SearchPageLayout from '../../layouts/SearchPageLayout'
import HorizontalVideoPreview from '../../components/HorizontalVideoPreview'
import Loader from '../../components/HorizontalVideoPreviewLoader'
import ErrorView from '../../components/ErrorView/ErrorView'
import Filter from '../../components/Icons/Filter'

import useFetch from '../../hooks/useFetch'
import getSearchs from '../../requests/getSearchs'
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

  const filterText = 'Filtros'

  return (
    <>
      <Head>
        <title>{query}</title>
      </Head>

      <SearchPageLayout>
        <div className="p-4 lg:max-w-screen-xl mx-auto md:px-6 md:py-4">
          {isLoading &&
            [1, 2, 3, 4, 5].map((i) => (
              <div className="flex" key={i}>
                <Loader />
              </div>
            ))}

          {searchResponse && !isLoading && (
            <div className="flex flex-col gap-4">
              <div className="hidden md:flex items-center gap-2 py-2 border-b text-gray-500 hover:text-gray-900 hover:cursor-pointer">
                <Filter className="fill-current" />
                <p className="uppercase font-medium text-sm">{filterText}</p>
              </div>
              {searchResponse.items.map((item) => (
                <HorizontalVideoPreview item={item} key={item.id.videoId} />
              ))}
            </div>
          )}
        </div>

        {isError && <ErrorView />}
      </SearchPageLayout>
    </>
  )
}

export default SearchPage

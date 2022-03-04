import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AxiosRequestConfig } from 'axios'
import useFetch from './useFetch'

import getSuggestions from '../requests/getSuggestions'

export default function useAutocomplete(props: { keyword: string }): {
  suggestionResponse: Array<any> | null
  navigate: (query: string) => void
} {
  const { keyword } = props
  const [request, setRequest] = useState<AxiosRequestConfig | null>(null)
  const {
    response: { data: suggestionResponse },
  } = useFetch<Array<any>>(request)

  useEffect(() => {    
    const timerId = setTimeout(() => {
      if (keyword) {
        setRequest(getSuggestions({ keyword }))
      }
    }, 200)

    return () => clearTimeout(timerId)
  }, [keyword])

  const router = useRouter()

  const navigate = (query: string) => {
    if (query) router.push('/search/' + query)
  }

  return { suggestionResponse, navigate }
}

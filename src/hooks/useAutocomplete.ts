import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AxiosRequestConfig } from 'axios'
import useFetch from './useFetch'

import getSuggestions from '../requests/getSuggestions'

export default function useAutocomplete(props: { keyword: string }): {
  suggestions: Array<string> | null
  navigate: (query: string) => void
} {
  const { keyword } = props
  const [request, setRequest] = useState<AxiosRequestConfig | null>(null)
  const {
    response: { data: suggestionResponse },
  } = useFetch<Array<any>>(request)
  const [suggestions, setSuggestions] = useState<Array<string> | null>(null)

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (keyword) {
        setRequest(getSuggestions({ keyword }))
      }
    }, 200)

    return () => clearTimeout(timerId)
  }, [keyword])

  useEffect(() => {
    const suggestions: Array<string> = suggestionResponse?.[1]
      .slice(0, 10)
      .map((item: any[]): string => item[0] as string)
    setSuggestions(suggestions)
  }, [suggestionResponse])

  const router = useRouter()

  const navigate = (query: string) => {
    if (query) router.push('/search/' + query)
  }

  return { suggestions, navigate }
}

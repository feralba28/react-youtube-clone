import axios from 'axios'
import { useState, useEffect } from 'react'

interface FetchData<T> {
  data: T | null
}

function useFetch<dataType>(props: object): {
  isLoading: boolean
  response: FetchData<dataType>
  isError: boolean
} {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [isError, setIsError] = useState<boolean>(false)

  const [response, setResponse] = useState<FetchData<dataType>>({
    data: null,
  })

  useEffect(() => {
    setIsLoading(true)
    axios
      .request(props)
      .then((res) => {
        setIsError(false)
        setResponse(res)
      })
      .catch((err) => {
        console.error(err)
        setIsError(true)
      })
      .then(() => setIsLoading(false))
  }, [props])

  return {
    isLoading,
    response,
    isError,
  }
}

export default useFetch

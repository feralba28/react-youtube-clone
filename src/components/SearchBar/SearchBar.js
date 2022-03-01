import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useFetch from '../../hooks/useFetch'

import Suggestion from '../Suggestion/Suggestion'
import getSuggestions from '../../requests/getSuggestions'

import Back from '../Icons/Back'
import Close from '../Icons/Close'
import Microphone from '../Icons/Microphone'
import Search from '../Icons/Search'

import styles from './styles'

function SearchBar({ toggleSearchBar }) {
  const [value, setValue] = useState('')
  const [request, setRequest] = useState(null)

  const router = useRouter()

  const {
    response: { data: suggestionResponse },
  } = useFetch(request)

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (value) {
        setRequest(getSuggestions({ keyword: value }))
      }
    }, 200)

    return () => clearTimeout(timerId)
  }, [value])

  const handleOnChange = (e) => setValue(e.target.value)

  const handleReset = () => setValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      navigate(value)
    }
  }

  const handleSuggestionClick = (suggestion) => navigate(suggestion)

  const navigate = (query) => {
    toggleSearchBar()
    router.push('/search/' + query)
  }

  const inputRef = useRef()

  const handleOnArrowClick = (suggestion) => {
    setValue(suggestion + ' ')
    inputRef.current.focus()
  }

  const placeHolderText = 'Buscar en YouTube'

  return (
    <>
      <div
        className="w-full h-screen fixed top-0 z-20 bg-black/80 md:hidden"
        onClick={toggleSearchBar}
      ></div>

      <div className="fixed top-0 z-30 w-full md:hidden">
        <div className="flex bg-zinc-100">
          <button className="p-3" onClick={toggleSearchBar}>
            <Back fill="#606060" />
          </button>
          <form className="grow flex" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="grow"
              placeholder={placeHolderText}
              value={value}
              onChange={handleOnChange}
              autoFocus={true}
            />
            {value && (
              <button className="py-3 px-2" onClick={handleReset}>
                <Close fill="#606060" />
              </button>
            )}
            <button className="py-3 px-2">
              <Search fill="#606060" />
            </button>
            {!value && (
              <button className="py-3 px-2">
                <Microphone fill="#606060" />
              </button>
            )}
          </form>
        </div>

        {suggestionResponse && value && (
          <div className="divide-y divide-zinc-100">
            {suggestionResponse[1].slice(0, 10).map((item, index) => (
              <Suggestion
                key={index}
                item={item[0]}
                onSuggestionClick={handleSuggestionClick}
                onArrowClick={handleOnArrowClick}
              />
            ))}
          </div>
        )}
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

export default SearchBar

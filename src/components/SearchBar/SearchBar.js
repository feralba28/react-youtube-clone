import { useEffect, useRef, useState } from 'react'
import Back from '../Icons/Back'
import Search from '../Icons/Search'
import styles from './styles'

import Suggestion from '../Suggestion/Suggestion'

import getSuggestions from '../../requests/getSuggestions'
import useFetch from '../../hooks/useFetch'

function SearchBar({ toggleSearchBar, onSearch }) {
  const [value, setValue] = useState('')
  const [request, setRequest] = useState(getSuggestions({ keyword: '' }))

  const { response: { data: suggestionResponse } } = useFetch(request)

  useEffect(() => {
    if (value) {
      setRequest(getSuggestions({ keyword: value }))
    }
  }, [value])

  const handleOnChange = (e) => setValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      onSearch(value)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    onSearch(suggestion)
  }

  const inputRef = useRef()

  const handleOnArrowClick = (suggestion) => {
    setValue(suggestion + " ")
    inputRef.current.focus()
  }

  const placeHolderText = 'Buscar en YouTube'

  return (
    <>
      <div className="container p-none overlay" onClick={toggleSearchBar}></div>
      <div className="container p-none searchbar">
        <div className="row p-none bg-light border-bottom br-light-grey">
          <div className="col p-2" onClick={toggleSearchBar}>
            <Back className="vertical-align-middle" fill="#606060" />
          </div>
          <form className="col p-none grow-1 d-flex" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="grow-1"
              placeholder={placeHolderText}
              value={value}
              onChange={handleOnChange}
              autoFocus={true}
            />
            <button className="p-2">
              <Search className="vertical-align-middle" fill="#606060" />
            </button>
          </form>
        </div>
        {suggestionResponse &&
          value &&
          suggestionResponse[1]
            .slice(0, 10)
            .map((item, index) => (
              <Suggestion
                key={index}
                item={item[0]}
                onSuggestionClick={handleSuggestionClick}
                onArrowClick={handleOnArrowClick}
              />
            ))}
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default SearchBar

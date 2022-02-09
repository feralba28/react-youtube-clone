import { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'

import Suggestion from '../Suggestion/Suggestion'
import getSuggestions from '../../requests/getSuggestions'

import Back from '../Icons/Back'
import Close from '../Icons/Close'
import Microphone from '../Icons/Microphone'
import Search from '../Icons/Search'
import styles from './styles'

function SearchBar({ toggleSearchBar, onSearch }) {
  const [value, setValue] = useState('')
  const [request, setRequest] = useState(getSuggestions({ keyword: '' }))

  const {
    response: { data: suggestionResponse },
  } = useFetch(request)

  useEffect(() => {
    if (value) {
      setRequest(getSuggestions({ keyword: value }))
    }
  }, [value])

  const handleOnChange = (e) => setValue(e.target.value)

  const handleReset = () => setValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      onSearch(value)
    }
  }

  const handleSuggestionClick = (suggestion) => onSearch(suggestion)

  const inputRef = useRef()

  const handleOnArrowClick = (suggestion) => {
    setValue(suggestion + ' ')
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
            {value && (
              <div className="icon-button" onClick={handleReset}>
                <Close className="vertical-align-middle" fill="#606060" />
              </div>
            )}
            <button className="icon-button">
              <Search className="vertical-align-middle" fill="#606060" />
            </button>
            {!value && (
              <div className="icon-button">
                <Microphone className="vertical-align-middle" fill="#606060" />
              </div>
            )}
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

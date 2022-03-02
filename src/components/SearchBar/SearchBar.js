import { useRef, useState } from 'react'
import useSearch from '../../hooks/useSearch'

import Suggestion from '../Suggestion/Suggestion'

import Back from '../Icons/Back'
import Close from '../Icons/Close'
import Microphone from '../Icons/Microphone'
import Search from '../Icons/Search'

import styles from './styles'

function SearchBar({ toggleSearchBar }) {
  const [value, setValue] = useState('')
  const { suggestionResponse, navigate } = useSearch({ keyword: value })

  const handleOnChange = (e) => setValue(e.target.value)

  const handleReset = () => setValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      toggleSearchBar()
      navigate(value)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    toggleSearchBar()
    navigate(suggestion)
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
              <button type='reset' className="py-3 px-2" onClick={handleReset}>
                <Close fill="#606060" />
              </button>
            )}
            <button type='submit' className="py-3 px-2">
              <Search fill="#606060" />
            </button>
            {!value && (
              <button type='button' className="py-3 px-2">
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

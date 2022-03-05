import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import useAutocomplete from '../../hooks/useAutocomplete'
import Suggestion from '../Suggestion/Suggestion'

import MicrophoneFilled from '../Icons/MicrophoneFilled'
import Search from '../Icons/Search'

export default function SearchForm(props: { query: string }) {
  const { query } = props
  const [inputValue, setInputValue] = useState(query)
  const [isFocus, setIsFocus] = useState(false)
  const { suggestions, navigate } = useAutocomplete({
    keyword: inputValue,
  })

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setInputValue(query)
  }, [query])

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value)

  const handleOnFocus = () => setIsFocus(true)

  const handleOnBlur = () => setIsFocus(false)

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    inputRef.current?.blur()
    navigate(inputValue)
  }

  const handleOnSuggestionClick = (suggestion: string) => {
    navigate(suggestion)
  }

  const placeHolderText = 'Buscar'

  return (
    <div className="hidden md:flex items-center gap-2 grow ml-10 max-w-3xl">
      <form
        className="grow flex items-stretch border border-gray-300 rounded-sm divide-x divide-gray-300"
        onSubmit={handleOnSubmit}
      >
        <div className="relative grow flex items-stretch">
          <input
            ref={inputRef}
            type="search"
            className="grow outline-none px-3 rounded-l-sm focus:border focus:border-blue-700 focus:px-[11px]"
            placeholder={placeHolderText}
            value={inputValue || ''}
            onChange={handleOnchange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          {suggestions && inputValue && isFocus && (
            <div className="absolute top-0 translate-y-[40px] w-full border shadow-lg divide-y divide-zinc-100">
              {suggestions.map((item: string, index: number) => (
                <Suggestion
                  key={index}
                  item={item}
                  onSuggestionClick={handleOnSuggestionClick}
                />
              ))}
            </div>
          )}
        </div>
        <button className="w-16 h-10 bg-zinc-100 flex items-center justify-center rounded-r-sm">
          <Search fill="#303030" />
        </button>
      </form>
      <button className="flex items-center justify-center bg-zinc-100 w-10 h-10 rounded-full">
        <MicrophoneFilled />
      </button>
    </div>
  )
}

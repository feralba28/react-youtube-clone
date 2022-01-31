import { useState } from 'react'
import Back from '../Icons/Back'
import Search from '../Icons/Search'
import styles from './styles'

function SearchBar({ toggleSearchBar, onSearch }) {
  const [value, setValue] = useState('')

  const handleOnChange = (e) => setValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(value) {
      onSearch(value)
    }
  }

  const placeHolderText = 'Buscar en YouTube'

  return (
    <>
      <div
        className={`row p-none bg-light border-bottom br-light-grey shadow-sm searchbar`}
      >
        <div className="col p-2" onClick={toggleSearchBar}>
          <Back className="vertical-align-middle" fill="#606060" />
        </div>
        <form className="col p-none grow-1 d-flex" onSubmit={handleSubmit}>
          <input
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

      <style jsx>{styles}</style>
    </>
  )
}

export default SearchBar

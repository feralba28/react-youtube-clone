import { useRef, useState } from 'react'
import Link from 'next/link'
import useAutocomplete from '../../hooks/useAutocomplete'
import useScroll from '../../hooks/useScroll'

import SearchBar from '../SearchBar/SearchBar'
import Suggestion from '../Suggestion/Suggestion'
import Button from '../Button'

import Ellipsis from '../Icons/Ellipsis'
import Menu from '../Icons/Menu'
import MenuGrid from '../Icons/MenuGrid'
import MicrophoneFilled from '../Icons/MicrophoneFilled'
import Search from '../Icons/Search'
import User from '../Icons/User'
import YouTube from '../Icons/YouTube'

import styles from './styles'
import SearchForm from '../SearchForm'

function Navbar({ toggleSidebar }) {
  const { isActive } = useScroll()

  const [isSearchBar, setIsSearchBar] = useState(false)
  const toggleSearchBar = () => setIsSearchBar(!isSearchBar)

  const [inputValue, setInputValue] = useState('')
  const { suggestions, navigate } = useAutocomplete({ keyword: inputValue })

  const handleOnchange = (e) => setInputValue(e.target.value)
  const handleOnSuggestionClick = (suggestion) => navigate(suggestion)

  const inputRef = useRef()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    navigate(inputValue)
  }

  const loginButtonText = 'Acceder'
  const placeHolderText = 'Buscar'

  return (
    <>
      <nav
        className={`flex items-center justify-between gap-4 bg-white h-12 sticky top-0 shadow-md z-10 ${
          isActive ? 'nav-visible' : 'nav-hidden'
        } md:col-span-2 md:shadow-none md:h-[56px] md:px-4`}
      >
        <div className="flex items-center gap-4">
          <button
            className="p-2 bg-white sticky top-0 z-10 hidden md:flex"
            onClick={toggleSidebar}
          >
            <Menu stroke="#303030" />
          </button>

          <Link href="/">
            <a className="p-3 md:py-3 md:px-0">
              <YouTube />
            </a>
          </Link>
        </div>

        <div className="flex md:hidden">
          <button className="p-3" onClick={toggleSearchBar}>
            <Search fill="#606060" />
          </button>
          <button className="p-3">
            <User fill="#606060" />
          </button>
        </div>

        <SearchForm />

        <div className="hidden md:flex items-center gap-2">
          <button className="flex p-2">
            <MenuGrid fill="#606060" />
          </button>
          <button className="flex p-2">
            <Ellipsis fill="#606060" />
          </button>
          <Button
            icon={<User fill="#2563eb" />}
            text={loginButtonText}
            className="w-[120px] h-[40px]"
          />
        </div>
      </nav>

      {isSearchBar && <SearchBar toggleSearchBar={toggleSearchBar} />}

      <style jsx>{styles}</style>
    </>
  )
}

export default Navbar

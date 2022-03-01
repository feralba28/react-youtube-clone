import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import useSearch from '../../hooks/useSearch'

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

function Navbar({ toggleSidebar }) {
  const [isNavbar, setIsNavbar] = useState(true)
  const [oldScrollY, setOldScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY

      if (oldScrollY <= newScrollY) {
        newScrollY >= 100 ? setIsNavbar(false) : setIsNavbar(true)
      } else {
        setIsNavbar(true)
      }

      setOldScrollY(newScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [oldScrollY])

  const [isSearchBar, setIsSearchBar] = useState(false)
  const toggleSearchBar = () => setIsSearchBar(!isSearchBar)

  const [value, setValue] = useState('')
  const { suggestionResponse, navigate } = useSearch({ keyword: value })

  const handleOnchange = (e) => setValue(e.target.value)
  const handleSuggestionClick = (suggestion) => navigate(suggestion)

  const inputRef = useRef()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    navigate(value)
  }

  const loginButtonText = 'Acceder'
  const placeHolderText = 'Buscar'

  return (
    <>
      <nav
        className={`flex items-center justify-between gap-4 bg-white h-12 sticky top-0 shadow-md z-10 ${
          isNavbar ? 'nav-visible' : 'nav-hidden'
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
          <div className="p-3" onClick={toggleSearchBar}>
            <Search fill="#606060" />
          </div>
          <div className="p-3">
            <User fill="#606060" />
          </div>
        </div>

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
                value={value}
                onChange={handleOnchange}
              />
              {suggestionResponse && value && (
                <div className="absolute top-0 translate-y-[40px] w-full border shadow-lg divide-y divide-zinc-100">
                  {suggestionResponse[1].slice(0, 10).map((item, index) => (
                    <Suggestion
                      key={index}
                      item={item[0]}
                      onSuggestionClick={handleSuggestionClick}
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

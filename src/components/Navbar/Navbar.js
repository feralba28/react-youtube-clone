import { useEffect, useState } from 'react'

import SearchBar from '../SearchBar/SearchBar'

import Search from '../Icons/Search'
import User from '../Icons/User'
import YouTube from '../Icons/YouTube'

import styles from './styles'

function Navbar() {
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

  return (
    <>
      <div
        className={`flex items-center bg-white h-12 sticky top-0 justify-between shadow-md z-10 ${
          isNavbar ? 'nav-visible' : 'nav-hidden'
        } md:shadow-none md:h-[54px]`}
      >
        <div className="p-3 md:py-3 md:px-0">
          <YouTube />
        </div>

        <div className="flex">
          <div className="p-3" onClick={toggleSearchBar}>
            <Search fill="#606060" />
          </div>
          <div className="p-3">
            <User fill="#606060" />
          </div>
        </div>
      </div>

      {isSearchBar && (
        <SearchBar toggleSearchBar={toggleSearchBar} />
      )}

      <style jsx>{styles}</style>
    </>
  )
}

export default Navbar

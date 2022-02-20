import { useEffect, useState } from 'react'

import Search from '../Icons/Search'
import User from '../Icons/User'
import YouTube from '../Icons/YouTube'

import styles from './styles'

function Navbar({ toggleSearchBar }) {
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

  return (
    <>
      <div
        className={`flex justify-between bg-white shadow-md sticky top-0 z-10 ${
          isNavbar ? 'nav-visible' : 'nav-hidden'
        }`}
      >
        <div className="p-3">
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

      <style jsx>{styles}</style>
    </>
  )
}

export default Navbar

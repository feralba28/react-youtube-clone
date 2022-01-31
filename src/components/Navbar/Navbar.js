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
        className={`row bg-white p-none border-bottom br-light-grey shadow-m navbar ${
          isNavbar ? 'visible' : 'hidden'
        }`}
      >
        <div className="col p-2">
          <YouTube className="vertical-align-middle" />
        </div>
        <div className="col p-none d-flex">
          <div className="col p-2" onClick={toggleSearchBar}>
            <Search className="vertical-align-middle" fill="#606060" />
          </div>
          <div className="col p-2">
            <User className="vertical-align-middle" fill="#606060" />
          </div>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default Navbar

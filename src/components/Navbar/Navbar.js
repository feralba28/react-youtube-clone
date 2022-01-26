import { useEffect, useState } from 'react'
import styles from './styles'

function Navbar() {
  const [isNavbar, setIsNavbar] = useState(true)
  const [oldScrollY, setOldScrollY] = useState(0)

  const youtubeLogo = '/images/youtube.svg'
  const searchIcon = '/images/search.svg'
  const userIcon = '/images/user.svg'
  const youtubeLogoAlt = 'Youtube'
  const searchIconAlt = 'Buscar'
  const userIconAlt = 'Usuario'

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
          <img src={youtubeLogo} alt={youtubeLogoAlt} className="vertical-align-middle"/>
        </div>
        <div className="col p-none d-flex">
          <img className="p-2" src={searchIcon} alt={searchIconAlt}/>
          <img className="p-2" src={userIcon} alt={userIconAlt}/>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default Navbar

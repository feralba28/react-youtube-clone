import { useEffect, useState } from 'react'
import SearchIcon from '../Assets/search.svg'
import UserIcon from '../Assets/user.svg'
import YouTubeLogo from '../Assets/youtube.svg'

function Navbar() {
  const [isNavbar, setIsNavbar] = useState(true)
  const [oldScrollY, setOldScrollY] = useState(0)

  const youtubeLogoAlt = 'Youtube'
  const searchIconAlt = 'Buscar'
  const userIconAlt = 'Usuario'

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY

      if (oldScrollY <= newScrollY) {
        newScrollY > 180 ? setIsNavbar(false) : setIsNavbar(true)
      } else {
        setIsNavbar(true)
      }

      setOldScrollY(newScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [oldScrollY])

  return (
    <div
      className={`row bg-white p-none border-bottom br-light-grey shadow-m navbar ${
        isNavbar ? 'visible' : 'hidden'
      }`}
    >
      <div className="col p-2">
        <img src={YouTubeLogo} alt={youtubeLogoAlt} />
      </div>
      <div className="col p-none d-flex">
        <img className="p-2" src={SearchIcon} alt={searchIconAlt} />
        <img className="p-2" src={UserIcon} alt={userIconAlt} />
      </div>
    </div>
  )
}

export default Navbar

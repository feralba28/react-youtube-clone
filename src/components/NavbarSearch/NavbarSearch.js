import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Ellipsis from '../Icons/Ellipsis'
import Filter from '../Icons/Filter'
import Microphone from '../Icons/Microphone'
import YouTubeLogo from '../Icons/YouTubeLogo'
import styles from './styles'

function NavbarSearch({ toggleSearchBar }) {
  const {
    query: { query },
  } = useRouter()

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
        className={`flex items-center bg-white shadow-md sticky top-0 z-10 ${
          isNavbar ? 'nav-visible' : 'nav-hidden'
        }`}
      >
        <Link href="/">
          <div className="px-3">
            <YouTubeLogo fill="#FF0000"/>
          </div>
        </Link>
        <div className="grow bg-zinc-100 rounded-sm flex justify-between items-center">
          <div
            className="py-1.5 px-3 grow text-sm text-gray-800"
            onClick={toggleSearchBar}
          >
            {query}
          </div>
          <div className="py-1 px-3">
            <Filter fill="#606060" />
          </div>
        </div>
        <button className="pl-3 pr-1.5 py-1.5">
          <div className="flex items-center justify-center bg-zinc-100 w-8 h-8 rounded-full ">
            <Microphone fill="#606060" />
          </div>
        </button>
        <button className="pl-1.5 pr-3 py-3">
          <Ellipsis fill="#606060" />
        </button>
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default NavbarSearch

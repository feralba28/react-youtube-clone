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
        className={`row bg-white p-none border-bottom br-light-grey shadow-m navbar ${
          isNavbar ? 'visible' : 'hidden'
        }`}
      >
        <Link href="/">
          <div className="col px-2">
            <YouTubeLogo fill="#FF0000" className="vertical-align-middle" />
          </div>
        </Link>
        <div className="col p-none grow-1 bg-light rounded-xs d-flex jc-between ai-center">
          <div
            className="padding-search-input grow-1 fs-16 fw-400 color-dark"
            onClick={toggleSearchBar}
          >
            {query}
          </div>
          <div className="padding-search-filter">
            <Filter className="vertical-align-middle" fill="#606060" />
          </div>
        </div>
        <div className="col p-none pl-2 pr-1 py-1">
          <div className="d-flex ai-center jc-center microphone-bg bg-light">
            <Microphone className="vertical-align-middle" fill="#606060" />
          </div>
        </div>
        <div className="col p-none pl-1 pr-2 py-2">
          <Ellipsis className="vertical-align-middle" fill="#606060" />
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default NavbarSearch

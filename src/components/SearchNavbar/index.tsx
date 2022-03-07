import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useScroll from '../../hooks/useScroll'

import Button from '../Button'
import SearchBar from '../SearchBar/SearchBar'
import SearchForm from '../SearchForm'

import Ellipsis from '../Icons/Ellipsis'
import Filter from '../Icons/Filter'
import Menu from '../Icons/Menu'
import MenuGrid from '../Icons/MenuGrid'
import Microphone from '../Icons/Microphone'
import User from '../Icons/User'
import YouTube from '../Icons/YouTube'
import YouTubeLogo from '../Icons/YouTubeLogo'

import styles from './styles'

export default function SearchNavbar(props: {
  toggleSidebar: () => void
}): JSX.Element {
  const { toggleSidebar } = props
  const { isActive } = useScroll()
  const {
    query: { query },
  } = useRouter()

  const [isSearchBar, setIsSearchBar] = useState(false)
  const toggleSearchBar = () => setIsSearchBar(!isSearchBar)

  const loginButtonText = 'Acceder'

  return (
    <>
      <nav
        className={`flex items-center bg-white h-12 sticky top-0 shadow-md z-10 ${
          isActive ? 'nav-visible' : 'nav-hidden'
        } md:col-span-2 md:shadow-none md:h-[56px] md:px-4 md:justify-between md:gap-4`}
      >
        <div className="flex items-center gap-4">
          <button
            className="p-2 bg-white sticky top-0 z-10 hidden md:flex"
            onClick={toggleSidebar}
          >
            <Menu stroke="#303030" />
          </button>

          <Link href="/">
            <a className="px-3 md:hidden">
              <YouTubeLogo fill="#FF0000" />
            </a>
          </Link>

          <Link href="/">
            <a className="hidden p-3 md:py-3 md:px-0 md:inline-block">
              <YouTube />
            </a>
          </Link>
        </div>

        <div className="grow flex items-center gap-3 mr-1.5 md:hidden">
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
          <button className="">
            <div className="flex items-center justify-center bg-zinc-100 w-8 h-8 rounded-full ">
              <Microphone fill="#606060" />
            </div>
          </button>
          <button className="p-1">
            <Ellipsis fill="#606060" />
          </button>
        </div>

        <SearchForm query={query as string} />

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

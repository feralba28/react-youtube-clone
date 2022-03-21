import { useState } from 'react'
import Link from 'next/link'

import Button from '../Button'
import SearchBar from '../SearchBar/SearchBar'
import SearchForm from '../SearchForm'

import Ellipsis from '../Icons/Ellipsis'
import Menu from '../Icons/Menu'
import MenuGrid from '../Icons/MenuGrid'
import Search from '../Icons/Search'
import User from '../Icons/User'
import YouTube from '../Icons/YouTube'

export default function WatchNavbar(props: {
  toggleSidebar: () => void
}): JSX.Element {
  const { toggleSidebar } = props

  const [isSearchBar, setIsSearchBar] = useState(false)
  const toggleSearchBar = () => setIsSearchBar(!isSearchBar)

  const loginButtonText = 'Acceder'

  return (
    <>
      <nav
        className="flex items-center justify-between gap-4 bg-zinc-800 h-12 sticky top-0 shadow-md z-10 
        md:bg-white md:col-span-2 md:shadow-none md:h-[56px] md:px-4"
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
              <YouTube fill="white" className="md:hidden" />
              <YouTube className="hidden md:flex" />
            </a>
          </Link>
        </div>

        <div className="flex md:hidden">
          <button className="p-3" onClick={toggleSearchBar}>
            <Search fill="white" />
          </button>
          <button className="p-3">
            <Ellipsis fill="white" />
          </button>
        </div>

        <SearchForm query="" />

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
    </>
  )
}

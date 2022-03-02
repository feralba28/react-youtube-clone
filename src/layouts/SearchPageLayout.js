import { useState } from 'react'

import BottomNavigation from '../components/BottomNavigation/BottomNavigation'
import NavbarSearch from '../components/NavbarSearch/NavbarSearch'
import SearchBar from '../components/SearchBar/SearchBar'

function SearchPageLayout({ children }) {
  const [isSearchBar, setIsSearchBar] = useState(false)

  const toggleSearchBar = () => setIsSearchBar(!isSearchBar)

  return (
    <div className="flex flex-col h-screen">
      <NavbarSearch toggleSearchBar={toggleSearchBar} />
      {isSearchBar && (
        <SearchBar toggleSearchBar={toggleSearchBar} />
      )}
      <div className="grow">{children}</div>
      <BottomNavigation />
    </div>
  )
}

export default SearchPageLayout

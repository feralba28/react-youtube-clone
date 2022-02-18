import { useState } from 'react'

import BottomNavigation from '../components/BottomNavigation/BottomNavigation'
import NavbarSearch from '../components/NavbarSearch/NavbarSearch'
import SearchBar from '../components/SearchBar/SearchBar'

function SearchPageLayout({ children }) {
  const [isSearchBar, setIsSearchBar] = useState(false)

  const toggleSearchBar = () => setIsSearchBar(!isSearchBar)

  return (
    <div className="container p-none d-flex fd-col min-height-100vh">
      <NavbarSearch toggleSearchBar={toggleSearchBar} />
      {isSearchBar && (
        <SearchBar toggleSearchBar={toggleSearchBar} />
      )}
      <div className="container p-none grow-1">{children}</div>
      <BottomNavigation />
    </div>
  )
}

export default SearchPageLayout

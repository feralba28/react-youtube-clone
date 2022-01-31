import { useState } from 'react'
import BottomNavigation from '../components/BottomNavigation/BottomNavigation'
import Navbar from '../components/Navbar/Navbar'
import SearchBar from '../components/SearchBar/SearchBar'

function WebsiteLayout({ children, setKeyword }) {
  const [isSearchBar, setIsSearchBar] = useState(false)

  const toggleSearchBar = () => setIsSearchBar(!isSearchBar)

  const onSearch = (value) => {
    setKeyword(value)
    setIsSearchBar(!isSearchBar)
  }

  return (
    <div className="container p-none d-flex fd-col min-height-100vh">
      <Navbar toggleSearchBar={toggleSearchBar} />
      {isSearchBar && (
        <SearchBar toggleSearchBar={toggleSearchBar} onSearch={onSearch} />
      )}
      <div className="container p-none grow-1">{children}</div>
      <BottomNavigation />
    </div>
  )
}

export default WebsiteLayout

import { useState } from 'react'
import BottomNavigation from '../components/BottomNavigation/BottomNavigation'
import Navbar from '../components/Navbar/Navbar'
import SearchBar from '../components/SearchBar/SearchBar'

function WebsiteLayout({ children }) {
  const [isSearchBar, setIsSearchBar] = useState(false)

  const toggleSearchBar = () => setIsSearchBar(!isSearchBar)

  return (
    <div className="container p-none d-flex fd-col min-height-100vh">
      <Navbar toggleSearchBar={toggleSearchBar} />
      {isSearchBar && (
        <SearchBar toggleSearchBar={toggleSearchBar} />
      )}
      <div className="container p-none grow-1">{children}</div>
      <BottomNavigation />
    </div>
  )
}

export default WebsiteLayout

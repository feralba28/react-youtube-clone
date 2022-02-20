import { useState } from 'react'
import BottomNavigation from '../components/BottomNavigation/BottomNavigation'
import Navbar from '../components/Navbar/Navbar'
import SearchBar from '../components/SearchBar/SearchBar'

function WebsiteLayout({ children }) {
  const [isSearchBar, setIsSearchBar] = useState(false)

  const toggleSearchBar = () => setIsSearchBar(!isSearchBar)

  return (
    <div className="container mx-auto flex flex-col h-screen">
      <Navbar toggleSearchBar={toggleSearchBar} />
      {isSearchBar && (
        <SearchBar toggleSearchBar={toggleSearchBar} />
      )}
      <div className="grow">{children}</div>
      <BottomNavigation />
    </div>
  )
}

export default WebsiteLayout

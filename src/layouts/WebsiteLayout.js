import { useState } from 'react'

import BottomNavigation from '../components/BottomNavigation/BottomNavigation'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar'
import SideNavigation from '../components/SideNavigation'

import Menu from '../components/Icons/Menu'

function WebsiteLayout({ children }) {
  const [isSidebar, setIsSidebar] = useState(false)

  const toggleSidebar = () => setIsSidebar(!isSidebar)

  return (
    <div
      className="min-h-screen flex flex-col
      md:h-screen md:grid md:grid-cols-[74px_minmax(auto,_1fr)] md:grid-rows-[56px_minmax(auto,_1fr)]"
    >
      <button
        className="bg-white sticky top-0 z-10 hidden md:block"
        onClick={toggleSidebar}
      >
        <Menu stroke="#303030" />
      </button>

      <Navbar />

      <SideNavigation />

      <Sidebar isSidebar={isSidebar} toggleSidebar={toggleSidebar} />

      <main className="grow md:border-t md:col-span-2 md:overflow-y-scroll lg:col-span-1">
        {children}
      </main>

      <BottomNavigation />
    </div>
  )
}

export default WebsiteLayout

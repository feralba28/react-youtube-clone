import { useState } from 'react'

import BottomNavigation from '../components/BottomNavigation/BottomNavigation'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar'
import SideNavigation from '../components/SideNavigation'

function WebsiteLayout({ children }) {
  const [isSidebar, setIsSidebar] = useState(false)

  const toggleSidebar = () => setIsSidebar(!isSidebar)

  return (
    <div
      className="min-h-screen flex flex-col
      md:h-screen md:grid md:grid-cols-[74px_minmax(auto,_1fr)] md:grid-rows-[56px_minmax(auto,_1fr)]"
    >
      <Navbar toggleSidebar={toggleSidebar} />

      <SideNavigation />

      <Sidebar isActive={isSidebar} toggleSidebar={toggleSidebar} />

      <main className="grow md:bg-zinc-50 md:border-t md:col-span-2 md:overflow-y-scroll lg:col-span-1">
        {children}
      </main>

      <BottomNavigation />
    </div>
  )
}

export default WebsiteLayout

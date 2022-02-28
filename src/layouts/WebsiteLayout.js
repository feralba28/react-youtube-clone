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
      className="h-screen grid grid-cols-1 grid-rows-[48px_minmax(auto,_1fr)_50px]
      lg:grid-cols-[74px_minmax(auto,_1fr)] lg:grid-rows-[54px_minmax(auto,_1fr)]"
    >
      <button className="bg-white sticky top-0 hidden lg:block" onClick={toggleSidebar}>
        <Menu stroke="#303030"/>
      </button>

      <Navbar />
      
      <SideNavigation />

      <Sidebar isSidebar={isSidebar} toggleSidebar={toggleSidebar} />

      <main className='lg:border-t lg:overflow-y-scroll scroll-smooth'>
        {children}
      </main>

      <BottomNavigation />
    </div>
  )
}

export default WebsiteLayout

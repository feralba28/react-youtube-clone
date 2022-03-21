import { ReactNode, useState } from 'react'

import WatchNavbar from '../components/WatchNavbar'
import Sidebar from '../components/Sidebar'

export default function(props: {children: ReactNode}): JSX.Element {
  const { children } = props

  const [isSidebar, setIsSidebar] = useState(false)

  const toggleSidebar = () => setIsSidebar(!isSidebar)

  return (
    <div
      className="min-h-screen flex flex-col"
    >
      <WatchNavbar toggleSidebar={toggleSidebar} />

      <Sidebar isActive={isSidebar} toggleSidebar={toggleSidebar} />

      <main className="grow md:bg-zinc-50 md:border-t">
        {children}
      </main>
    </div>
  )
}
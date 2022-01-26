import BottomNavigation from '../components/BottomNavigation/BottomNavigation'
import Navbar from '../components/Navbar/Navbar'

function WebsiteLayout({ children }) {
  return (
    <div className="container p-none d-flex fd-col min-height-100vh">
      <Navbar />
      <div className="container p-none grow-1">
        {children}
      </div>
      <BottomNavigation />
    </div>
  )
}

export default WebsiteLayout

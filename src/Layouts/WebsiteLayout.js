import BottomNavigation from '../Components/BottomNavigation'
import Navbar from '../Components/Navbar'

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
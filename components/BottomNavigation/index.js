import DiscoverIcon from '../Assets/discover.svg'
import HomeIcon from '../Assets/home.svg'
import LibraryIcon from '../Assets/library.svg'

function BottomNavigation() {
  const discoverText = 'Explorar'
  const homeText = 'Principal'
  const libraryText = 'Biblioteca'

  return (
    <div className="row bg-white p-none border-top br-light-grey bottom-navigation">
      <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
        <img src={HomeIcon} alt={homeText} />
        <p>{homeText}</p>
      </div>
      <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
        <img src={DiscoverIcon} alt={discoverText} />
        <p>{discoverText}</p>
      </div>
      <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
        <img src={LibraryIcon} alt={libraryText} />
        <p>{libraryText}</p>
      </div>
    </div>
  )
}

export default BottomNavigation

import styles from './styles'

function BottomNavigation() {
  const homeIcon = '/images/home.svg'
  const discoverIcon = '/images/discover.svg'
  const libraryIcon = '/images/library.svg'
  const discoverText = 'Explorar'
  const homeText = 'Principal'
  const libraryText = 'Biblioteca'

  return (
    <>
      <div className="row bg-white p-none border-top br-light-grey bottom-navigation">
        <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
          <img src={homeIcon} alt={homeText} />
          <p>{homeText}</p>
        </div>
        <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
          <img src={discoverIcon} alt={discoverText} />
          <p>{discoverText}</p>
        </div>
        <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
          <img src={libraryIcon} alt={libraryText} />
          <p>{libraryText}</p>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default BottomNavigation

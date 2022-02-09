import Link from 'next/link'

import Home from '../Icons/Home'
import Explore from '../Icons/Explore'
import Library from '../Icons/Library'

import styles from './styles'

function BottomNavigation() {
  const exploreText = 'Explorar'
  const homeText = 'Principal'
  const libraryText = 'Biblioteca'

  return (
    <>
      <div className="row bg-white p-none border-top br-light-grey bottom-navigation">
        <Link href="/">
          <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
            <Home className="vertical-align-middle" />
            <p>{homeText}</p>
          </div>
        </Link>
        <Link href="/explore">
          <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
            <Explore className="vertical-align-middle" />
            <p>{exploreText}</p>
          </div>
        </Link>
        <Link href="/library">
          <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
            <Library className="vertical-align-middle" />
            <p>{libraryText}</p>
          </div>
        </Link>
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default BottomNavigation

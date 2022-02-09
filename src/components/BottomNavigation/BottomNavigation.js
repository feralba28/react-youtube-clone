import { useRouter } from 'next/router'
import Link from 'next/link'

import Home from '../Icons/Home'
import Explore from '../Icons/Explore'
import Library from '../Icons/Library'
import HomeFilled from '../Icons/HomeFilled'
import ExploreFilled from '../Icons/ExploreFilled'
import LibraryFilled from '../Icons/LibraryFilled'

import styles from './styles'

const routes = {
  home: '/',
  explore: '/explore',
  library: '/library',
}

function BottomNavigation() {
  const { pathname } = useRouter()

  const exploreText = 'Explorar'
  const homeText = 'Principal'
  const libraryText = 'Biblioteca'

  return (
    <>
      <div className="row bg-white p-none border-top br-light-grey bottom-navigation">
        <Link href={routes.home}>
          <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
            {pathname === routes.home ? (
              <HomeFilled className="vertical-align-middle" />
            ) : (
              <Home className="vertical-align-middle" />
            )}
            <p>{homeText}</p>
          </div>
        </Link>
        <Link href={routes.explore}>
          <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
            {pathname === routes.explore ? (
              <ExploreFilled className="vertical-align-middle" />
            ) : (
              <Explore className="vertical-align-middle" />
            )}
            <p>{exploreText}</p>
          </div>
        </Link>
        <Link href={routes.library}>
          <div className="col grow-1 p-none my-1 mx-4 d-flex fd-col ai-center">
            {pathname === routes.library ? (
              <LibraryFilled className="vertical-align-middle" />
            ) : (
              <Library className="vertical-align-middle" />
            )}
            <p>{libraryText}</p>
          </div>
        </Link>
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default BottomNavigation

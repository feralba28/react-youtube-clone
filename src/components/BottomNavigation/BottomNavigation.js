import { useRouter } from 'next/router'
import Link from 'next/link'

import Home from '../Icons/Home'
import Explore from '../Icons/Explore'
import Library from '../Icons/Library'
import HomeFilled from '../Icons/HomeFilled'
import ExploreFilled from '../Icons/ExploreFilled'
import LibraryFilled from '../Icons/LibraryFilled'

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
      <div className="flex bg-white border sticky bottom-0 h-[50px] md:hidden">
        <Link href={routes.home}>
          <div className="grow flex flex-col items-center p-1">
            {pathname === routes.home ? (
              <HomeFilled />
            ) : (
              <Home />
            )}
            <p className="text-[11px]">{homeText}</p>
          </div>
        </Link>
        <Link href={routes.explore}>
          <div className="grow flex flex-col items-center p-1">
            {pathname === routes.explore ? (
              <ExploreFilled />
            ) : (
              <Explore />
            )}
            <p className="text-[11px]">{exploreText}</p>
          </div>
        </Link>
        <Link href={routes.library}>
          <div className="grow flex flex-col items-center p-1">
            {pathname === routes.library ? (
              <LibraryFilled />
            ) : (
              <Library />
            )}
            <p className="text-[11px]">{libraryText}</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default BottomNavigation

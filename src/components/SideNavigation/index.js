import { useRouter } from 'next/router'
import Link from 'next/link'

import Explore from '../Icons/Explore'
import ExploreFilled from '../Icons/ExploreFilled'
import Home from '../Icons/Home'
import HomeFilled from '../Icons/HomeFilled'
import Library from '../Icons/Library'
import LibraryFilled from '../Icons/LibraryFilled'
import Shorts from '../Icons/Shorts'
import ShortsFilled from '../Icons/ShortsFilled'
import Subscriptions from '../Icons/Subscriptions'
import SubscriptionsFilled from '../Icons/SubscriptionsFilled'
import History from '../Icons/History'
import HistoryFilled from '../Icons/HistoryFilled'

const navigation = [
  {
    path: '/',
    icon: <Home />,
    iconFilled: <HomeFilled />,
    title: 'Principal',
  },
  {
    path: '/explore',
    icon: <Explore />,
    iconFilled: <ExploreFilled />,
    title: 'Explorar',
  },
  {
    path: '/shorts',
    icon: <Shorts />,
    iconFilled: <ShortsFilled />,
    title: 'Shorts',
  },
  {
    path: '/subscriptions',
    icon: <Subscriptions />,
    iconFilled: <SubscriptionsFilled />,
    title: 'Suscripciones',
  },
  {
    path: '/library',
    icon: <Library />,
    iconFilled: <LibraryFilled />,
    title: 'Biblioteca',
  },
  {
    path: '/history',
    icon: <History />,
    iconFilled: <HistoryFilled />,
    title: 'Historial',
  },
]

function SideNavigation() {
  const { pathname } = useRouter()

  return (
    <aside className="w-[74px] hidden lg:flex flex-col justify-start items-center mt-2">
      {navigation.map((item) => (
        <Link href={item.path} key={item.path}>
          <a className="flex flex-col justify-center items-center w-full h-[74px] hover:bg-stone-100 ">
            {pathname === item.path ? item.iconFilled : item.icon}
            <p className="text-[10px] mt-1.5">{item.title}</p>
          </a>
        </Link>
      ))}
    </aside>
  )
}

export default SideNavigation

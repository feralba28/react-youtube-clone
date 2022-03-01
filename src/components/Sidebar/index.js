import Link from 'next/link'

import Button from '../Button'
import MenuIten from '../MenuItem'

import Config from '../Icons/Config'
import Explore from '../Icons/Explore'
import ExploreFilled from '../Icons/ExploreFilled'
import Flag from '../Icons/Flag'
import Help from '../Icons/Help'
import Home from '../Icons/Home'
import HomeFilled from '../Icons/HomeFilled'
import Library from '../Icons/Library'
import LibraryFilled from '../Icons/LibraryFilled'
import Live from '../Icons/Live'
import Menu from '../Icons/Menu'
import More from '../Icons/More'
import Shorts from '../Icons/Shorts'
import ShortsFilled from '../Icons/ShortsFilled'
import Subscriptions from '../Icons/Subscriptions'
import SubscriptionsFilled from '../Icons/SubscriptionsFilled'
import History from '../Icons/History'
import HistoryFilled from '../Icons/HistoryFilled'
import YouTube from '../Icons/YouTube'
import YouTubeOutline from '../Icons/YouTubeOutline'
import User from '../Icons/User'
import Warning from '../Icons/Warning'

import styles from './styles'

const mainMenu = [
  [
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
  ],
  [
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
  ],
]

const secondaryMenu = [
  {
    sectionTitle: 'Más de YouTube',
    items: [
      {
        path: '/premium',
        icon: <YouTubeOutline />,
        title: 'YouTube Premium',
      },
      {
        path: '/live',
        icon: <Live />,
        title: 'En vivo',
      },
    ],
  },
  {
    items: [
      {
        path: '/account',
        icon: <Config />,
        title: 'Configuración',
      },
      {
        path: '/report-history',
        icon: <Flag />,
        title: 'Historial de denuncias',
      },
      {
        path: '/help',
        icon: <Help />,
        title: 'Ayuda',
      },
      {
        path: '/send-comments',
        icon: <Warning />,
        title: 'Enviar comentarios',
      },
    ],
  },
]

export default function Sidebar({ isActive, toggleSidebar }) {
  const loginDescriptionText =
    'Accede para dar “Me gusta” a los videos, realizar comentarios y suscribirte.'
  const loginButtonText = 'Acceder'
  const exploreChannelsText = 'Explorar canales'

  return (
    <aside className={`absolute inset-0 ${isActive ? 'visible' : 'invisible'}`}>
      <div
        className={`w-full h-screen fixed top-0 z-20 bg-black/80 hidden ${
          isActive ? 'md:block' : 'md:hidden'
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 z-30 w-60 h-screen bg-white hidden md:flex flex-col ${
          isActive ? 'sidebar-visible' : 'sidebar-hidden'
        }`}
      >
        <div className="flex items-center h-[56px] sticky top-0 bg-white">
          <button className="bg-white w-[74px] h-full" onClick={toggleSidebar}>
            <Menu stroke="#303030" />
          </button>
          <Link href="/">
            <a className="py-4">
              <YouTube />
            </a>
          </Link>
        </div>

        <div className="overflow-y-scroll divide-y">
          {mainMenu.map((routes, index) => (
            <ul className="py-2" key={index}>
              {routes.map((route) => (
                <li key={route.path}>
                  <MenuIten
                    path={route.path}
                    icon={route.icon}
                    iconFilled={route.iconFilled}
                    title={route.title}
                  />
                </li>
              ))}
            </ul>
          ))}

          <div className="flex flex-col gap-2 px-8 py-4">
            <p className="text-sm">{loginDescriptionText}</p>
            <Button icon={<User fill="#2563eb" />} text={loginButtonText}/>
          </div>

          <ul className="py-2">
            <li>
              <MenuIten
                path="/guide"
                icon={<More />}
                title={exploreChannelsText}
              />
            </li>
          </ul>

          {secondaryMenu.map((section, index) => (
            <ul className="py-2" key={index}>
              {section.sectionTitle && (
                <p className="py-2 px-6 text-sm text-zinc-700 font-medium uppercase">
                  {section.sectionTitle}
                </p>
              )}
              {section.items.map((item) => (
                <li key={item.path}>
                  <MenuIten
                    path={item.path}
                    icon={item.icon}
                    title={item.title}
                  />
                </li>
              ))}
            </ul>
          ))}

          <div className="py-2 px-6 flex flex-col gap-3">
            <div className="text-[13px] text-zinc-600 font-medium ">
              <span className="inline-block mr-2">Acerca de</span>
              <span className="inline-block mr-2">Prensa</span>
              <span className="inline-block mr-2">Derechos de autor</span>
              <span className="inline-block mr-2">
                Comunicarte con nosotros
              </span>
              <span className="inline-block mr-2">Creadores</span>
              <span className="inline-block mr-2">Anunciar</span>
              <span className="inline-block mr-2">Desarrolladores</span>
            </div>
            <div className="text-[13px] text-zinc-600 font-medium ">
              <span className="inline-block mr-2">Condiciones</span>
              <span className="inline-block mr-2">Privacidad</span>
              <span className="inline-block mr-2">Políticas y seguridad</span>
              <span className="inline-block mr-2">Cómo funcionaYoutube</span>
              <span className="inline-block mr-2">Prueba funciones nuevas</span>
            </div>
            <div className="text-xs text-zinc-500">© 2022 Google LLC</div>
          </div>
        </div>
      </div>

      <style jsx>{styles}</style>
    </aside>
  )
}

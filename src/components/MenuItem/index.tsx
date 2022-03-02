import { useRouter } from 'next/router'
import Link from 'next/link'

export default function MenuIten(props: {
  path: string
  icon: JSX.Element
  iconFilled?: JSX.Element
  title: string
}): JSX.Element {
  const { path, icon, iconFilled, title } = props
  const { pathname } = useRouter()

  return (
    <Link href={path}>
      <a
        className={`w-full px-6 h-10 flex items-center gap-x-6 ${
          pathname === path
            ? 'font-medium bg-stone-200 hover:bg-stone-300'
            : 'hover:bg-stone-100'
        }`}
      >
        {pathname === path ? (iconFilled ? iconFilled : icon) : icon}
        <p className="text-[14px]">{title}</p>
      </a>
    </Link>
  )
}

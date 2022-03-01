import Link from 'next/link'
import Ellipsis from '../Icons/Ellipsis'
import Search from '../Icons/Search'
import YouTube from '../Icons/YouTube'
import styles from './styles'

function FixedNavbar({ toggleSearchBar }) {
  return (
    <>
      <div className="flex justify-between bg-zinc-800">
        <Link href="/">
          <div className="p-3">
            <YouTube fill="white" />
          </div>
        </Link>
        <div className="flex">
          <button className="p-3" onClick={toggleSearchBar}>
            <Search fill="white" />
          </button>
          <button className="p-3">
            <Ellipsis fill="white" />
          </button>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default FixedNavbar

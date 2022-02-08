import Link from 'next/link'
import Ellipsis from '../Icons/Ellipsis'
import Search from '../Icons/Search'
import YouTube from '../Icons/YouTube'
import styles from './styles'

function FixedNavbar({ toggleSearchBar }) {
  return (
    <>
      <div className="row bg-dark p-none fixed-navbar">
        <Link href="/">
          <a className="col p-2">
            <YouTube className="vertical-align-middle" fill="white" />
          </a>
        </Link>
        <div className="col p-none d-flex">
          <div className="col p-2" onClick={toggleSearchBar}>
            <Search className="vertical-align-middle" fill="white" />
          </div>
          <div className="col p-2">
            <Ellipsis className="vertical-align-middle" fill="white" />
          </div>
        </div>
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default FixedNavbar

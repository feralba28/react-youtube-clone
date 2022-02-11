import Link from 'next/link'
import { DateTime } from 'luxon'

import Ellipsis from '../Icons/Ellipsis'
import styles from './styles'

import VideoPreviewItem from '../../types/VideoPreviewItem'

function VideoPreview(props: { item: VideoPreviewItem }) {
  const { item } = props

  const isoDate = item.snippet.publishedAt
  const timeAgo = DateTime.fromISO(isoDate).toRelative()

  return (
    <>
      <Link href={`/watch/${item.id.videoId}`}>
        <div className="row p-none px-2 ai-start mt-2">
          <div className="col-5">
            <div className="preview-img-container">
              <img
                src={item.snippet.thumbnails.high.url}
                className="preview-img"
                alt={item.snippet.title}
              />
            </div>
          </div>
          <div className="col-7 p-none pl-2 d-flex ai-start">
            <div className="grow-1">
              <p className="fs-14 fw-400 preview-title">{item.snippet.title}</p>
              <p className="fs-12 color-dark-grey">
                {item.snippet.channelTitle}
              </p>
              <p className="fs-12 color-dark-grey">{timeAgo}</p>
            </div>
            <div className='p-1'>
              <Ellipsis className="vertical-align-middle" fill="#606060" />
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{styles}</style>
    </>
  )
}

export default VideoPreview

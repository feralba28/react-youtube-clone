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
        <a className="flex items-start">
          <div className="w-5/12">
            <div className="preview-img-container">
              <img
                src={item.snippet.thumbnails.high.url}
                className="preview-img"
                alt={item.snippet.title}
              />
            </div>
          </div>
          <div className="w-7/12 pl-3 flex items-start">
            <div className="grow">
              <p className="text-sm text-gray-800 leading-4 preview-title md:text-lg md:leading-6">
                {item.snippet.title}
              </p>
              <p className="text-xs text-gray-500 md:leading-5">
                {item.snippet.channelTitle}
              </p>
              <p className="text-xs text-gray-500 md:leading-5">{timeAgo}</p>
            </div>
            <div className="p-1.5">
              <Ellipsis fill="#6B7280" />
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{styles}</style>
    </>
  )
}

export default VideoPreview

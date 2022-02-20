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
        <div className="flex px-3 items-start mt-3">
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
              <p className="text-sm text-gray-800 preview-title">
                {item.snippet.title}
              </p>
              <p className="text-xs text-gray-400">
                {item.snippet.channelTitle}
              </p>
              <p className="text-xs text-gray-400">{timeAgo}</p>
            </div>
            <div className="p-1.5">
              <Ellipsis fill="#9CA3AF" />
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{styles}</style>
    </>
  )
}

export default VideoPreview

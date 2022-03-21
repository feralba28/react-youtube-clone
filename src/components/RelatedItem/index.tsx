import Link from 'next/link'
import { DateTime } from 'luxon'

import Ellipsis from '../Icons/Ellipsis'
import VideoPreviewItem from '../../types/VideoPreviewItem'

export default function RelatedItem(props: { item: VideoPreviewItem }) {
  const { item } = props

  const isoDate = item.snippet.publishedAt
  const timeAgo = DateTime.fromISO(isoDate).toRelative()

  return (
    <>
      <Link href={`/watch/${item.id.videoId}`}>
        <a className="flex flex-col sm:flex-row">
          <div className="aspect-video overflow-hidden flex items-center sm:w-5/12">
            <img
              src={item.snippet.thumbnails.high.url}
              className="w-full"
              alt={item.snippet.title}
            />
          </div>
          <div className="flex items-start p-1 sm:w-7/12 sm:p-0 sm:pl-3">
            <div className="px-1.5 pt-1.5 grow">
              <p className="text-sm font-medium text-gray-800 preview-title">
                {item.snippet.title}
              </p>
              <div className="text-xs mt-0.5">
                <span className="text-gray-500">
                  {item.snippet.channelTitle}
                </span>
                <span className="text-gray-500 mx-1">•</span>
                <span className="text-gray-500">{timeAgo}</span>
              </div>
            </div>
            <div className="p-1.5">
              <Ellipsis fill="#1F2937" />
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}

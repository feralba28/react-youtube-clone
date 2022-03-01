import Link from 'next/link'
import { DateTime } from 'luxon'
import styles from './styles'
// import fromISOToHHMMSS from '../../utils/fromISOToHHMMSS'
import Ellipsis from '../Icons/Ellipsis'
import VideoPreviewItem from '../../types/VideoPreviewItem'

function VideoPreview(props: { item: VideoPreviewItem }) {
  const { item } = props

  // const duration = fromISOToHHMMSS(item.contentDetails.duration)
  // const viewCount = Number(item.statistics.viewCount).toLocaleString('us')
  // const viewCountText = `${viewCount} visualizaciones`

  const isoDate = item.snippet.publishedAt
  const timeAgo = DateTime.fromISO(isoDate).toRelative()

  return (
    <>
      <Link href={`/watch/${item.id.videoId}`}>
        <a className="flex flex-col">
          <div className="preview-img-container">
            <img
              src={item.snippet.thumbnails.high.url}
              className="preview-img"
              alt={item.snippet.title}
            />
            {/* <div className="duration-container row jc-end">
            <span className="fs-12 color-white bg-dark rounded-xs duration-item">
              {duration}
            </span>
          </div> */}
          </div>
          <div className="flex items-start p-1">
            {/* <div className="col">
            <img
              src={userIcon}
              width="40"
              height="40"
            />
          </div> */}
            <div className="px-1.5 pt-1.5 grow">
              <p className="text-sm font-medium text-gray-800 preview-title">
                {item.snippet.title}
              </p>
              <div className="text-xs mt-0.5">
                <span className="text-gray-500">
                  {item.snippet.channelTitle}
                </span>
                {/* <span className="text-gray-500 mx-1">•</span>
              <span className="text-gray-500">{viewCountText}</span> */}
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

      <style jsx>{styles}</style>
    </>
  )
}

export default VideoPreview

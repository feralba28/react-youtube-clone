import { DateTime } from 'luxon'
import fromISODurationToString from '../Helpers/fromISODurationToString'
import EllipsisIcon from '../Assets/ellipsis.svg'
import UserIcon from '../Assets/user.svg'

function VideoPreview({ item }) {
  const duration = fromISODurationToString(item.contentDetails.duration)

  const viewCount = Number(item.statistics.viewCount).toLocaleString('us')
  const viewCountText = `${viewCount} visualizaciones`

  const isoDate = item.snippet.publishedAt
  const timeAgo = DateTime.fromISO(isoDate).toRelative()

  return (
    <div className="d-flex fd-col py-1">
      <div className="preview-img-container">
        <img src={item.snippet.thumbnails.high.url} className="preview-img" />
        <div className="duration-container row jc-end">
          <span className="fs-12 color-white bg-dark rounded-xs duration-item">
            {duration}
          </span>
        </div>
      </div>
      <div className="row ai-start">
        <div className="col">
          <img
            src={UserIcon}
            width="40"
            height="40"
            className="vertical-align-middle"
          />
        </div>
        <div className="col grow-1">
          <p className="fs-14 fw-500 preview-title">{item.snippet.title}</p>
          <div className="fs-12 mt-1">
            <span className="color-dark-grey">{item.snippet.channelTitle}</span>
            <span className="color-dark-grey mx-1">•</span>
            <span className="color-dark-grey">{viewCountText}</span>
            <span className="color-dark-grey mx-1">•</span>
            <span className="color-dark-grey">{timeAgo}</span>
          </div>
        </div>
        <div className="col">
          <img src={EllipsisIcon} className="vertical-align-middle" />
        </div>
      </div>
    </div>
  )
}

export default VideoPreview

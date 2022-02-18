import { DateTime } from 'luxon'
import ArrowDown from '../../components/Icons/ArrowDown'

export default function Information(props: {
  title: string
  viewCount: string
  publishedAt: string
}) {
  const viewCount = Number(props.viewCount).toLocaleString('us')
  const viewCountText = `${viewCount} visualizaciones`

  const isoDate = props.publishedAt
  const timeAgo = DateTime.fromISO(isoDate).toRelative()

  return (
    <>
      <div className="row ai-start px-2 pt-2">
        <div className="col p-none">
          <h1 className="fs-18 fw-400 color-black line-height-22">
            {props.title}
          </h1>
        </div>
        <div className="col p-none">
          <ArrowDown className="vertical-align-middle" />
        </div>
      </div>
      <div className="row jc-start p-none px-2 fs-12 fw-400">
        <span className="color-dark-grey">{viewCountText}</span>
        <span className="color-dark-grey mx-1">•</span>
        <span className="color-dark-grey">{timeAgo}</span>
      </div>
    </>
  )
}

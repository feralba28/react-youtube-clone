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
      <div className="flex justify-between items-start md:w-full">
        <h1 className="text-lg text-slate-800">{props.title}</h1>
        <ArrowDown className="md:hidden" />
      </div>
      <div className="flex text-xs text-slate-600 md:text-sm pr-2">
        <span>{viewCountText}</span>
        <span className="mx-1">•</span>
        <span>{timeAgo}</span>
      </div>
    </>
  )
}

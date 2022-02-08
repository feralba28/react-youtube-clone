import ArrowUpDown from '../../components/Icons/ArrowUpDown'

export default function Comments(props: { commentCount: string }) {
  const commentCount = Number(props.commentCount).toLocaleString('us')

  const commentsText = 'Comentarios'

  return (
    <div className="row p-2 py-3">
      <div className="col p-none">
        <span className="fs-14 color-black">{commentsText}</span>
        <span className="fs-14 color-dark-grey mx-1">•</span>
        <span className="fs-14 color-dark-grey">{commentCount}</span>
      </div>
      <div className="col p-none ">
        <ArrowUpDown width={16} height={16} className="vertical-align-middle" />
      </div>
    </div>
  )
}

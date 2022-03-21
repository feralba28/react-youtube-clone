import ArrowUpDown from '../../components/Icons/ArrowUpDown'

export default function Comments(props: { commentCount: string }) {
  const commentCount = Number(props.commentCount).toLocaleString('us')

  const commentsText = 'Comentarios'

  return (
    <div className="flex justify-between items-center p-3 md:px-0">
      <div>
        <span className="text-sm">{commentsText}</span>
        <span className="text-sm text-slate-600 mx-1">•</span>
        <span className="text-sm text-slate-600">{commentCount}</span>
      </div>
      <ArrowUpDown width={16} height={16} />
    </div>
  )
}

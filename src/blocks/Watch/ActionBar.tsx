import Like from '../../components/Icons/Like'
import Dislike from '../../components/Icons/Dislike'
import Share from '../../components/Icons/Share'
import Save from '../../components/Icons/Save'
import Report from '../../components/Icons/Report'

export default function ActionBar(props: { likeCount: string }) {
  const likeCount = Number(props.likeCount).toLocaleString('us')

  const dislikeText = 'No me gusta'
  const shareText = 'Compartir'
  const saveText = 'Guardar'
  const reportText = 'Denunciar'

  return (
    <div className="flex p-3 justify-evenly">
      <div className="flex flex-col items-center">
        <Like />
        <p className="mt-1.5 text-xs font-medium text-slate-800">{likeCount}</p>
      </div>
      <div className="flex flex-col items-center">
        <Dislike />
        <p className="mt-1 text-xs font-medium text-slate-800">{dislikeText}</p>
      </div>
      <div className="flex flex-col items-center">
        <Share />
        <p className="mt-1 text-xs font-medium text-slate-800">{shareText}</p>
      </div>
      <div className="flex flex-col items-center">
        <Save />
        <p className="mt-1 text-xs font-medium text-slate-800">{saveText}</p>
      </div>
      <div className="flex flex-col items-center">
        <Report />
        <p className="mt-1 text-xs font-medium text-slate-800">{reportText}</p>
      </div>
    </div>
  )
}

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
    <div className="mt-3 flex justify-evenly gap-4 md:m-0">
      <button className="flex flex-col items-center md:flex-row md:gap-1">
        <Like />
        <p className="mt-1.5 text-xs font-medium text-slate-800 md:m-0 md:text-sm md:font-medium md:uppercase">
          {likeCount}
        </p>
      </button>
      <button className="flex flex-col items-center md:flex-row md:gap-1">
        <Dislike />
        <p className="mt-1 text-xs font-medium text-slate-800 md:m-0 md:text-sm md:font-medium md:uppercase">
          {dislikeText}
        </p>
      </button>
      <button className="flex flex-col items-center md:flex-row md:gap-1">
        <Share />
        <p className="mt-1 text-xs font-medium text-slate-800 md:m-0 md:text-sm md:font-medium md:uppercase">
          {shareText}
        </p>
      </button>
      <button className="flex flex-col items-center md:flex-row md:gap-1">
        <Save />
        <p className="mt-1 text-xs font-medium text-slate-800 md:m-0 md:text-sm md:font-medium md:uppercase">
          {saveText}
        </p>
      </button>
      <button className="flex flex-col items-center md:hidden">
        <Report />
        <p className="mt-1 text-xs font-medium text-slate-800">{reportText}</p>
      </button>
    </div>
  )
}

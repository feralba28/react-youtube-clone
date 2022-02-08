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
    <div className="row p-2 jc-evenly">
      <div className="col p-none d-flex fd-col ai-center">
        <Like className="vertical-align-middle" />
        <p className="mt-1 fs-12 fw-500 color-black">{likeCount}</p>
      </div>
      <div className="col p-none d-flex fd-col ai-center">
        <Dislike className="vertical-align-middle" />
        <p className="mt-1 fs-12 fw-500 color-black">{dislikeText}</p>
      </div>
      <div className="col p-none d-flex fd-col ai-center">
        <Share className="vertical-align-middle" />
        <p className="mt-1 fs-12 fw-500 color-black">{shareText}</p>
      </div>
      <div className="col p-none d-flex fd-col ai-center">
        <Save className="vertical-align-middle" />
        <p className="mt-1 fs-12 fw-500 color-black">{saveText}</p>
      </div>
      <div className="col p-none d-flex fd-col ai-center">
        <Report className="vertical-align-middle" />
        <p className="mt-1 fs-12 fw-500 color-black">{reportText}</p>
      </div>
    </div>
  )
}

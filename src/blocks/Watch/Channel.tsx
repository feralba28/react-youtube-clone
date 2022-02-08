export default function Channel(props: { title: string }) {
  const { title } = props

  const subscribeText = 'SUSCRIBIRME'

  return (
    <div className="row py-3">
      <div className="col">
        <p className="fs-14 fw-400 color-black">{title}</p>
      </div>
      <div className="col">
        <p className="fs-14 fw-500 color-red">{subscribeText}</p>
      </div>
    </div>
  )
}

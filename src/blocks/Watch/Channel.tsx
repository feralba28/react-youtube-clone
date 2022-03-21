export default function Channel(props: { title: string }) {
  const { title } = props

  const subscribeText = 'SUSCRIBIRME'

  return (
    <div className="flex justify-between items-center px-3 py-4 md:px-0">
      <p className="text-sm">{title}</p>
      <button>
        <p className="font-medium color-red">{subscribeText}</p>
      </button>
    </div>
  )
}

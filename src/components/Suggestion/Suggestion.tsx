import ArrowTopLeft from '../Icons/ArrowTopLeft'

export default function Suggestion(props: {
  item: string
  onSuggestionClick: (item: string) => void
  onArrowClick?: (item: string) => void
}) {
  const { item, onSuggestionClick, onArrowClick } = props
  const handleSuggestionClick = () => {
    onSuggestionClick(item)
  }

  const handleOnArrowClick = () => {
    onArrowClick?.(item)
  }

  return (
    <div className="h-10 flex items-stretch bg-white hover:bg-zinc-100 hover:cursor-default">
      <div
        className="grow flex items-center pl-2"
        onMouseDown={handleSuggestionClick}
      >
        <p className="text-sm font-medium">{item}</p>
      </div>
      {onArrowClick && (
        <button
          className="flex items-center bg-zinc-100 p-2 md:hidden"
          onClick={handleOnArrowClick}
        >
          <ArrowTopLeft fill="#808080" />
        </button>
      )}
    </div>
  )
}

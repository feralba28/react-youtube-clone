import ArrowTopLeft from '../Icons/ArrowTopLeft'

function Suggestion({ item, onSuggestionClick, onArrowClick }) {

  const handleSuggestionClick = () => {
    onSuggestionClick(item)
  }

  const handleOnArrowClick = () => {
    onArrowClick(item)
  }

  return (
    <div className="flex items-stretch bg-white">
      <div className="grow flex items-center pl-2" onClick={handleSuggestionClick}>
        <p className="text-sm font-medium">{item}</p>
      </div>
      <div className="bg-zinc-100 p-2" onClick={handleOnArrowClick}>
        <ArrowTopLeft fill="#808080" />
      </div>
    </div>
  )
}

export default Suggestion

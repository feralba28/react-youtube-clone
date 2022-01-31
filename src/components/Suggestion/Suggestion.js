import ArrowTopLeft from '../Icons/ArrowTopLeft'

function Suggestion({ item, onSuggestionClick, onArrowClick }) {

  const handleSuggestionClick = () => {
    onSuggestionClick(item)
  }

  const handleOnArrowClick = () => {
    onArrowClick(item)
  }

  return (
    <div className="row ai-stretch p-none bg-white border-bottom br-light">
      <div className="grow-1 d-flex ai-center p-1 " onClick={handleSuggestionClick}>
        <p className="fs-14 fw-500">{item}</p>
      </div>
      <div className="bg-light p-1" onClick={handleOnArrowClick}>
        <ArrowTopLeft className="vertical-align-middle" fill="#808080" />
      </div>
    </div>
  )
}

export default Suggestion

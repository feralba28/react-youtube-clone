function Chip({ text, isSelected, onClick }) {
  return (
    <div
      className={`d-inline-block border rounded-xl py-1 px-2 m-1 chip ${
        isSelected ? 'bg-dark-grey br-dark-grey' : 'bg-light br-light-grey'
      }`}
      onClick={onClick}
    >
      <span
        className={`fs-14 white-space-nowrap ${
          isSelected ? 'color-white' : 'color-dark'
        }`}
      >
        {text}
      </span>
    </div>
  )
}

export default Chip

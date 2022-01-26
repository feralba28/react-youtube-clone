import { useState, useEffect } from 'react'
import Chip from '../Chip/Chip'

function ChoiceChip({ options, handleSelected }) {
  const [chips, setChips] = useState([])

  useEffect(() => {
    const optionList = options.map((item, index) => {
      return {
        ...item,
        isSelected: index == 0 ? true : false,
      }
    })

    setChips(optionList)

    if (optionList[0] !== undefined) {
      handleSelected(optionList[0].id)
    }
  }, [options])

  const handleOnSelect = (selected) => {
    const items = chips.map((item) => {
      item == selected ? (item.isSelected = true) : (item.isSelected = false)
      return item
    })

    setChips(items)
    handleSelected(selected.id)
  }

  return (
    <>
      <div className="d-flex p-1 bg-white overflow-scrollx">
        {chips.map((item) => (
          <Chip
            key={item.id}
            text={item.option}
            isSelected={item.isSelected}
            onClick={() => handleOnSelect(item)}
          />
        ))}
      </div>
    </>
  )
}

export default ChoiceChip

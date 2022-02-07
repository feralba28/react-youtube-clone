import { useState, useEffect } from 'react'
import ChoiceChip from '../../components/ChoiceChip/ChoiceChip'
import styles from './styles'

function ChoiceCategoryBar({ categories, setSelectedCategory }) {
  const [isChipsBar, setIsChipsBar] = useState(true)
  const [oldScrollY, setOldScrollY] = useState(0)
  const [chipOptions, setChipOptions] = useState([])

  useEffect(() => {
    const options = categories.map((item, index) => {
      return {
        id: item.id,
        option: item.item.title,
      }
    })
    setChipOptions(options)
  }, [categories])

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY

      if (oldScrollY <= newScrollY) {
        newScrollY >= 100 ? setIsChipsBar(false) : setIsChipsBar(true)
      } else {
        setIsChipsBar(true)
      }

      setOldScrollY(newScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [oldScrollY])

  const handleSelected = (categoryId) => {
    const category = categories.find((category) => {
      return category.id == categoryId
    })
    setSelectedCategory(category)
  }

  return (
    <>
    <div
      className={`row bg-white p-none border-bottom br-light-grey homepage-choice-chip-bar ${
        isChipsBar ? 'visible' : 'hidden'
      }`}
    >
      <ChoiceChip options={chipOptions} handleSelected={handleSelected} />
    </div>

    <style jsx>{styles}</style>
    </>
  )
}

export default ChoiceCategoryBar

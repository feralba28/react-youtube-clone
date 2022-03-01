import { useEffect, useState } from 'react'

export default function useScroll(): { isActive: boolean } {
  const [isActive, setIsActive] = useState(true)
  const [oldScrollY, setOldScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY

      if (oldScrollY <= newScrollY) {
        newScrollY >= 100 ? setIsActive(false) : setIsActive(true)
      } else {
        setIsActive(true)
      }

      setOldScrollY(newScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [oldScrollY])

  return { isActive }
}
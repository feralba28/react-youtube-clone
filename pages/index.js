import { useState, useEffect } from 'react'
import suggestionList from './Data/suggestion'
import ChoiceCategoryBar from './ChoiceCategoryBar'
import searchResultItemsResponse from './Data/searchResult'
import VideoPreview from '../../Components/VideoPreview'
import WebsiteLayout from '../../Layouts/WebsiteLayout'

function HomePage() {
  const [suggestions, setSuggestions] = useState([])
  const [selectedSuggestion, setSelectedSuggestion] = useState(null)
  const [searchResultItems, setSearchResultItems] = useState([])

  useEffect(() => {
    //Fetch
    setSuggestions(suggestionList)
  }, [])

  useEffect(() => {
    setSearchResultItems(searchResultItemsResponse)
  }, [selectedSuggestion])

  const handleSelectCategory = (category) => setSelectedSuggestion(category)

  return (
    <WebsiteLayout>
      <ChoiceCategoryBar
        categories={suggestions}
        setSelectedCategory={handleSelectCategory}
      />

      {searchResultItems.map((item, index) => (
        <VideoPreview item={item} key={index} />
      ))}
    </WebsiteLayout>
  )
}

export default HomePage

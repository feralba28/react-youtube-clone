import { useState, useEffect } from 'react'
import Head from 'next/head'
import WebsiteLayout from '../layouts/WebsiteLayout'
import ChoiceCategoryBar from '../blocks/ChoiceCategoryBar'
import suggestionList from '../public/Data/suggestion'
import searchResultItemsResponse from '../public/Data/searchResult'
import VideoPreview from '../Components/VideoPreview'
import AppLayout from '../layouts/AppLayout'

function Home() {
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
    <>
      <Head>
        <title>Home</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <!-- Roofstrap CSS --> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/RooftopAcademy/rooftstrap@v2.5.0/dist/css/app.css"
        ></link>
      </Head>

      <AppLayout>
        <WebsiteLayout>
          <ChoiceCategoryBar
            categories={suggestions}
            setSelectedCategory={handleSelectCategory}
          />

          {searchResultItems.map((item, index) => (
            <VideoPreview item={item} key={index} />
          ))}
        </WebsiteLayout>
      </AppLayout>
    </>
  )
}

export default Home

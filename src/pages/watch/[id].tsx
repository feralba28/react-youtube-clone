import { useState } from 'react'
import { NextPageContext } from 'next'
import Head from 'next/head'
import axios from 'axios'

import WatchNavbar from '../../components/WatchNavbar/WatchNavbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import Player from '../../components/Player/Player'

import Related from '../../blocks/Watch/Related'
import Information from '../../blocks/Watch/Information'
import ActionBar from '../../blocks/Watch/ActionBar'
import Channel from '../../blocks/Watch/Channel'
import Comments from '../../blocks/Watch/Comments'

import getVideos from '../../requests/getVideos'
import VideoDetail from '../../types/VideoDetail'
import styles from '../../styles/watch'

function Watch<NextPage>(props: { item: VideoDetail }) {
  const { item } = props

  const [isSearchBar, setIsSearchBar] = useState(false)

  const toggleSearchBar = () => setIsSearchBar(!isSearchBar)

  return (
    <>
      <Head>
        <title>{item.snippet.title}</title>
      </Head>

      <div className="container p-none d-flex fd-col min-height-100vh">
        <div className="d-flex fd-col sticky-container">
          <div className="row p-none">
            <WatchNavbar toggleSearchBar={toggleSearchBar} />
            {isSearchBar && (
              <SearchBar
                toggleSearchBar={toggleSearchBar}
              />
            )}
          </div>
          <Player id={item.id} />
        </div>

        <div className="container p-none">
          <Information
            title={item.snippet.title}
            viewCount={item.statistics.viewCount}
            publishedAt={item.snippet.publishedAt}
          />

          <ActionBar likeCount={item.statistics.likeCount} />

          <div className="border-bottom br-light"></div>

          <Channel title={item.snippet.channelTitle} />

          <div className="border-bottom br-light"></div>

          <Comments commentCount={item.statistics.commentCount} />

          <div className="border-bottom br-light"></div>
        </div>
        
        <Related id={item.id} />
      </div>

      <style jsx>{styles}</style>
    </>
  )
}

export default Watch

Watch.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query

  const item = await axios
    .request(getVideos({ id: id as string }))
    .then((res) => {
      return res.data.items[0]
    })
    .catch((err) => {
      console.error(err)
    })

  return {
    item: item,
  }
}

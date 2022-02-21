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

function Watch<NextPage>(props: { item: VideoDetail }) {
  const { item } = props

  const [isSearchBar, setIsSearchBar] = useState(false)

  const toggleSearchBar = () => setIsSearchBar(!isSearchBar)

  return (
    <>
      <Head>
        <title>{item.snippet.title}</title>
      </Head>

      <div className="flex flex-col divide-y">
        <div className="flex flex-col sticky top-0 z-10">
          <div>
            <WatchNavbar toggleSearchBar={toggleSearchBar} />
            {isSearchBar && <SearchBar toggleSearchBar={toggleSearchBar} />}
          </div>
          <Player id={item.id} />
        </div>

        <div className="divide-y">
          <div>
            <Information
              title={item.snippet.title}
              viewCount={item.statistics.viewCount}
              publishedAt={item.snippet.publishedAt}
            />

            <ActionBar likeCount={item.statistics.likeCount} />
          </div>

          <Channel title={item.snippet.channelTitle} />

          <Comments commentCount={item.statistics.commentCount} />
        </div>

        <Related id={item.id} />
      </div>
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

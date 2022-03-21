import { GetServerSideProps } from 'next'
import Head from 'next/head'
import axios from 'axios'

import WatchPageLayout from '../../layouts/WatchPageLayout'
import Related from '../../blocks/Watch/Related'
import Information from '../../blocks/Watch/Information'
import ActionBar from '../../blocks/Watch/ActionBar'
import Channel from '../../blocks/Watch/Channel'
import Comments from '../../blocks/Watch/Comments'

import getVideos from '../../requests/getVideos'
import VideoDetail from '../../types/VideoDetail'

function Watch(props: { item: VideoDetail }) {
  const { item } = props

  const videoSrc = `https://www.youtube.com/embed/${item.id}`

  return (
    <>
      <Head>
        <title>{item.snippet.title}</title>
      </Head>

      <WatchPageLayout>
        <div className="md:p-4 lg:grid lg:grid-cols-3 gap-x-6 lg:max-w-[1360px] lg:mx-auto">
          <div className="sticky top-12 md:static flex justify-center col-span-2 order-1">
            <iframe
              src={videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full aspect-video sm:aspect-[28/12] md:aspect-video"
            ></iframe>
          </div>

          <div className="divide-y col-span-2 order-3">
            <div className="flex flex-col p-3 md:flex-row md:flex-wrap md:items-center md:justify-between md:p-0 md:pt-4 md:pb-3 lg:gap-1">
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
      </WatchPageLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

  const item = await axios
    .request(getVideos({ id: id as string }))
    .then((res) => {
      return res.data.items[0]
    })
    .catch((err) => {
      console.error(err)
    })

  return {
    props: {
      item: item,
    },
  }
}

export default Watch

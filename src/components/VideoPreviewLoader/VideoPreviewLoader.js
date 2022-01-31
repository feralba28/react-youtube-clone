import ContentLoader from 'react-content-loader'

function VideoPreviewLoader(props) {
  return (
    <ContentLoader
      speed={2}
      width={425}
      height={310}
      viewBox="0 0 425 310"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="83" y="347" rx="2" ry="2" width="140" height="10" />
      <rect x="97" y="370" rx="2" ry="2" width="140" height="10" />
      <rect x="12" y="253" rx="2" ry="2" width="346" height="16" />
      <rect x="128" y="265" rx="0" ry="0" width="1" height="0" />
      <rect x="12" y="277" rx="2" ry="2" width="217" height="16" />
      <rect x="0" y="6" rx="0" ry="0" width="425" height="240" />
    </ContentLoader>
  )
}

export default VideoPreviewLoader

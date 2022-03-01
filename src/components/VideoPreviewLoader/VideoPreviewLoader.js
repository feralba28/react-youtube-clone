import ContentLoader from 'react-content-loader'

function VideoPreviewLoader(props) {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 600 450"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="162" y="371" rx="0" ry="0" width="1" height="0" />
      <rect x="0" y="0" rx="0" ry="0" width="600" height="338" />
      <rect x="20" y="356" rx="2" ry="2" width="501" height="26" />
      <rect x="20" y="405" rx="2" ry="2" width="366" height="26" />
    </ContentLoader>
  )
}

export default VideoPreviewLoader

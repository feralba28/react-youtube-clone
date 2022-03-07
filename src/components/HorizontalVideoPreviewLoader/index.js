import ContentLoader from 'react-content-loader'

function Loader(props) {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 425 106"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="83" y="347" rx="2" ry="2" width="140" height="10" />
      <rect x="97" y="370" rx="2" ry="2" width="140" height="10" />
      <rect x="190" y="18" rx="2" ry="2" width="185" height="16" />
      <rect x="128" y="265" rx="0" ry="0" width="1" height="0" />
      <rect x="190" y="46" rx="2" ry="2" width="141" height="16" />
      <rect x="12" y="12" rx="0" ry="0" width="168" height="94" />
      <rect x="190" y="73" rx="0" ry="0" width="94" height="16" />
    </ContentLoader>
  )
}

export default Loader

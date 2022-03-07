import css from 'styled-jsx/css'

const styles = css`
  .preview-img-container {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 56.25%;
    margin: auto;
    overflow: hidden;
  }

  .preview-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin: auto;
  }

  .preview-title {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export default styles

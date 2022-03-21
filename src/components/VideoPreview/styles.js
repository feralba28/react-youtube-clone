import css from 'styled-jsx/css'

const styles = css`
  .preview-img-container {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding-bottom: 56.25%;
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
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .duration-container {
    position: absolute;
    bottom: 0;
  }

  .duration-item {
    padding: 1px 4px;
  }
`

export default styles

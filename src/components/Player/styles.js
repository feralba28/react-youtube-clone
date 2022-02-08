import css from 'styled-jsx/css'

const styles = css`

  .player-container {
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding-bottom: 56.25%;
    margin: auto;
    overflow: hidden;
  }

  .player {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin: auto;
  }

  .bg-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin: auto;
    z-index: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin: auto;
    z-index: 3;
  }

  .controls-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 5;
  }

  .controls-top {
    position: absolute;
    top: 0;
  }

  .controls-middle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .controls-bottom {
    position: absolute;
    bottom: 0;
  }

  .visible {
    visibility: visible;
  }

  .hidden {
    visibility: hidden;
  }
`

export default styles

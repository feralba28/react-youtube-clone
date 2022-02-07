import css from 'styled-jsx/css'

const styles = css`
  .homepage-choice-chip-bar {
    position: sticky;
    top: 49px;
    z-index: 3;
  }

  .visible {
    transition: 0.3s;
  }

  .hidden {
    transition: 0.3s;
    transform: translateY(-200%);
  }
`

export default styles

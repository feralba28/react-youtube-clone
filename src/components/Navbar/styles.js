import css from 'styled-jsx/css'

const styles = css`
  .navbar {
    position: sticky;
    top: 0;
    z-index: 5;
  }

  .visible {
    transition: 0.3s;
  }

  .hidden {
    transition: 0.3s;
    transform: translateY(-100%);
  }
`

export default styles

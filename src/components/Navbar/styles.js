import css from 'styled-jsx/css'

const styles = css`
  .nav-visible {
    transition: 0.3s;
  }

  .nav-hidden {
    transition: 0.3s;
    transform: translateY(-100%);
  }

  @media (min-width: 1024px) {
    .nav-hidden {
      transform: translateY(0%);
    }
  }
`

export default styles

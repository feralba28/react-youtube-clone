import css from 'styled-jsx/css'

const styles = css`
  .sidebar-visible {
    transition: 0.3s ease;
  }

  .sidebar-hidden {
    visibility: hidden;
    transform: translateX(-100%);
    transition: transform 0.3s ease 0ms,
      visibility 0ms linear 0.3s;
  }
`

export default styles
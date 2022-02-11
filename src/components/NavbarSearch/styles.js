import css from 'styled-jsx/css'

const styles = css`
  .navbar {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .visible {
    transition: 0.3s;
  }

  .hidden {
    transition: 0.3s;
    transform: translateY(-100%);
  }

  .padding-search-input {
    padding: 8px 12px;
  }

  .padding-search-filter {
    padding: 4px 12px;
  }

  .microphone-bg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`

export default styles

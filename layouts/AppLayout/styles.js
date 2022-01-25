import css from 'styled-jsx/css'

export const globalStyles = css.global`
  * {
    font-family: 'Roboto', sans-serif;
  }

  .min-height-100vh {
    min-height: 100vh;
  }

  .d-inline-block {
    display: inline-block;
  }

  .overflow-scrollx::-webkit-scrollbar {
    display: none;
  }

  .white-space-nowrap {
    white-space: nowrap;
  }

  .vertical-align-middle {
    vertical-align: middle;
  }
`

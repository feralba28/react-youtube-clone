import css from 'styled-jsx/css'

const styles = css`
  .searchbar {
    position: fixed;
    top: 0;
    z-index: 3;
  }

  input {
    background: transparent;
    border: 0;
    font-size: 15px;
    margin: 10px 0px 10px 0px;
    padding: 0px 1px;
    border-bottom: 1px solid #737373;
  }

  input:focus {
    border-bottom: 2px solid black;
    margin: 11px 0px 9px 0px;
  }

  button {
    border: none;
    background: transparent;
  }
`

export default styles

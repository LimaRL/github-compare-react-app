import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }
  a{
    text-decoration: none
  }
  body{
    background: ${colors.primaryColor};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;

    #root{
      min-height: 100vh;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export default GlobalStyle

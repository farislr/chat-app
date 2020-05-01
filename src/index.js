import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Global, css } from '@emotion/core'
import 'semantic-ui-less/semantic.less'
// import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker'

const theme = {
  colors: {
    primary: '#05386b',
    secondary: '#edf5e1',
  },
}

const globalCss = css`
  .ui.menu {
    border-radius: 0px;
    background: ${theme.colors.primary};
    height: 70px;
  }
`

ReactDOM.render(
  <Router>
    <Global styles={globalCss} />
    <App />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

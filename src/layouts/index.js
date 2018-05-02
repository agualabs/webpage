import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { MuiThemeProvider } from 'material-ui/styles'

import Navbar from '../components/Navbar'
import './all.sass'
import theme from './theme.js'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title='AguaLabs GmbH' />
    <MuiThemeProvider theme={theme}>
      <Navbar />
      <div>{children()}</div>
    </MuiThemeProvider>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

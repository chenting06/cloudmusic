import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

const App = memo(() => {
  return (
    <HashRouter>
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </HashRouter>

  )
})

export default App
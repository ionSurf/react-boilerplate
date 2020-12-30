import React, { Suspense } from 'react'

// Routing
import { mount, route, lazy } from 'navi'
import { Router, View } from 'react-navi'

// Pages
import { HomePage } from '../../pages'

// Components
import { Header, Footer } from '../../components'

const routes =
  mount({
    '/': route({
      title: "Homepage",
      //getData: () => api.fetchProducts(),
      view: <HomePage />,
    }),
    '/products': lazy(() => import('../../pages/Products')),
  })

const App = _ => (<>
  <Router routes={routes}>
    <Suspense fallback={null}>
      <Header />
      <View />
      <Footer />
    </Suspense>
  </Router>
</>)

export default App
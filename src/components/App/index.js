import React, { Suspense } from 'react'

// Routing
import { mount, route } from 'navi'
import { Router, View } from 'react-navi'
import { routes } from '../../config/routes'

// Components
import { Layout } from '../'

//console.log(routes.reduce((o, key) => ({ ...o, [key.uri]: key}), {}))

const computedRoutes = mount(
  routes.reduce((o, { uri, id, ...rest } ) => ({ ...o, [uri]: route( {...rest} ) }), {})
)

const App = _ => (<>
  <Router routes={ computedRoutes }>
    <Layout>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </Layout>
  </Router>
</>)

export default App
import React from 'react'
import PositionSensorsPageView from './view'

import { useCurrentRoute } from 'react-navi'

const PositionSensorsPage = _ => {
  const route = useCurrentRoute()

  console.log( 'views', route.views )
  console.log( 'url', route.url )
  console.log( 'data', route.data )
  console.log( 'status', route.status )

  return (
<PositionSensorsPageView />
)}

export default PositionSensorsPage
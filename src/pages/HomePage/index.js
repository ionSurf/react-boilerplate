import React from 'react'
import HomePageView from './view'

import { useCurrentRoute } from 'react-navi'

const HomePage = _ => {
  const route = useCurrentRoute()

  console.log( 'views', route.views )
  console.log( 'url', route.url )
  console.log( 'data', route.data )
  console.log( 'status', route.status )

  return(
    <HomePageView />
)}

export default HomePage
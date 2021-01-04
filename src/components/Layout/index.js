//import BusyIndicator from 'react-busy-indicator@1.0.0'
import React from 'react'
//import { Link, useLoadingRoute } from 'react-navi'

import LayoutView from './view'

export default function Layout({ children }) {
  // If there is a route that hasn't finished loading, it can be
  // retrieved with `useLoadingRoute()`.
  // let loadingRoute = useLoadingRoute()

  return (
    <LayoutView children={children} />
  )
}
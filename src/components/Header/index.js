import React from 'react'
import HeaderView from './view'
import { useCurrentRoute } from 'react-navi'

import { SideMenu } from '../'

const Header = _ => {
  const route = useCurrentRoute()

  return (
  <HeaderView
    title={ route.title }>
    <SideMenu />
  </HeaderView>)
}

export default Header
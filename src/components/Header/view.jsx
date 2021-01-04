import React from 'react'

const HeaderView = ({ title, children }) => (
  <header className="Layout-header">
      { children }
      <h1 className="Layout-title">{ title }</h1>
    </header>)

export default HeaderView
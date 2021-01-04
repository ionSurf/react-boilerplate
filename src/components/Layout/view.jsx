import React from 'react'

import { Header, Footer } from '../'

export default function LayoutView({ children }) {
  return (
    <div className="Layout">
      {/* This component shows a loading indicator after a delay */}
      {/* <BusyIndicator isBusy={!!loadingRoute} delayMs={200} /> */}
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
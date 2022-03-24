import React from 'react'
import { Outlet } from 'react-router-dom'

import LayoutsNavbar from './Navbar'
import LayoutsFooter from './Footer'

function App() {
  return (
    <>
      <LayoutsNavbar />
      <Outlet />
      <LayoutsFooter />
    </>
  )
}

export default App

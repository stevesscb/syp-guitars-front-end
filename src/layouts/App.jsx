import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import LayoutsNavbar from './Navbar'
import LayoutsFooter from './Footer'

function App() {
  return (
    <>
      <LayoutsNavbar />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <LayoutsFooter />
    </>
  )
}

export default App

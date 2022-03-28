import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { useAuth } from '@/contexts/Auth'

import Loading from '@/components/Loading'
import LayoutsNavbar from './Navbar'
import LayoutsFooter from './Footer'

function App() {
  const { show: { loading }, getMyProfile } = useAuth()

  useEffect(() => {
    getMyProfile()
  }, [])

  return (
    <>
      <LayoutsNavbar />
      { loading ? <Loading /> : <Outlet />}
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

import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { AuthProvider } from '@/contexts/Auth'

import App from '@/layouts/App'
// import AuthRoute from '@/layouts/AuthRoute'
import NoAuthRoute from '@/layouts/NoAuthRoute'

import PagesAuthSignup from '@/pages/auth/Signup'
import PagesAuthLogin from '@/pages/auth/Login'

import PagesHome from '@/pages/Home'
import PagesAnother from '@/pages/Another'
import PagesNotFound from '@/pages/NotFound'

function Routing() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          <Route path="/" element={<App />}>
            <Route index element={<PagesHome />} />

            <Route path="/auth/signup" element={<NoAuthRoute><PagesAuthSignup /></NoAuthRoute>} />
            <Route path="/auth/login" element={<NoAuthRoute><PagesAuthLogin /></NoAuthRoute>} />

            <Route path="/another" element={<PagesAnother />} />
            <Route path="*" element={<PagesNotFound />} />
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routing

import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

import { AuthProvider } from '@/contexts/Auth'
import { MyGuitarsProvider } from '@/contexts/MyGuitars'
import { GuitarsProvider } from '@/contexts/Guitars'

import App from '@/layouts/App'
import AuthRoute from '@/layouts/AuthRoute'
import NoAuthRoute from '@/layouts/NoAuthRoute'

import PagesHome from '@/pages/Home'

import PagesAuthSignup from '@/pages/auth/Signup'
import PagesAuthLogin from '@/pages/auth/Login'

import PagesGuitarsIndex from '@/pages/guitars/Index'
import PagesGuitarsShow from '@/pages/guitars/Show'

import PagesMyGuitarsIndex from '@/pages/my-guitars/Index'
import PagesMyGuitarsNew from '@/pages/my-guitars/New'
import PagesMyGuitarsShow from '@/pages/my-guitars/Show'
import PagesMyGuitarsEdit from '@/pages/my-guitars/Edit'

import PagesAnother from '@/pages/Another'
import PagesNotFound from '@/pages/NotFound'

function Routing() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MyGuitarsProvider>
          <GuitarsProvider>

            <Routes>

              <Route path="/" element={<App />}>
                <Route index element={<PagesGuitarsIndex />} />

                <Route path="/auth/signup" element={<NoAuthRoute><PagesAuthSignup /></NoAuthRoute>} />
                <Route path="/auth/login" element={<NoAuthRoute><PagesAuthLogin /></NoAuthRoute>} />

                <Route path="/about" element={<PagesHome />} />
                <Route path="/guitars/:id" element={<PagesGuitarsShow />} />

                <Route path="/my/guitars" element={<AuthRoute><PagesMyGuitarsIndex /></AuthRoute>} />
                <Route path="/my/guitars/new" element={<AuthRoute><PagesMyGuitarsNew /></AuthRoute>} />
                <Route path="/my/guitars/:id" element={<AuthRoute><PagesMyGuitarsShow /></AuthRoute>} />
                <Route path="/my/guitars/:id/edit" element={<AuthRoute><PagesMyGuitarsEdit /></AuthRoute>} />

                <Route path="/another" element={<PagesAnother />} />
                <Route path="*" element={<PagesNotFound />} />
              </Route>

            </Routes>
          </GuitarsProvider>
        </MyGuitarsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routing

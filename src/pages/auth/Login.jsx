/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { useAuth } from '@/contexts/Auth'

import FormsAuthLogin from '@/forms/auth/Login'
import LayoutsHeader from '@/layouts/Header'

function PagesAuthLogin() {
  const { login } = useAuth()

  return (
    <div id="pages-auth-login" className="container">
      <LayoutsHeader />
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h6 className="text-center" style={{ fontFamily: 'Gloria Hallelujah', fontSize: '2em' }}>Login</h6>

          <FormsAuthLogin
            onSubmit={login}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesAuthLogin

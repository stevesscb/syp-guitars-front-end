/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { useAuth } from '@/contexts/Auth'

import FormsAuthSignup from '@/forms/auth/signup'

function PagesAuthSignup() {
  const { signup } = useAuth()

  return (
    <div id="pages-auth-signup" className="container">
      <header className="text-center">
        <h1>SYP GUITARS</h1>
        <h4>HK's Pre Owned Guitar Marketplace</h4>
      </header>
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h6 className="text-center">Join in</h6>

          <FormsAuthSignup
            onSubmit={signup}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesAuthSignup

/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { useAuth } from '@/contexts/Auth'

import FormsAuthSignup from '@/forms/auth/signup'

function PagesAuthSignup() {
  const { signup } = useAuth()

  return (
    <div id="pages-auth-signup" className="container">
      <div className="row d-flex align-items-center" style={{ minHeight: '60vh' }}>
        <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <h6 className="text-center" style={{ fontFamily: 'Gloria Hallelujah', fontSize: '2em' }}>Join in!</h6>

          <FormsAuthSignup
            onSubmit={signup}
          />
        </div>
      </div>
    </div>
  )
}

export default PagesAuthSignup

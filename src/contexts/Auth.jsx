import React, { useState, createContext, useContext } from 'react'
import axios from 'axios'
import produce from 'immer'
import { useNavigate } from 'react-router-dom'

import { renderErrors } from '@/contexts/_utils'

const AuthContext = createContext()

const initialShow = { data: null, error: null, loading: true, authenticating: false, unAuthenticating: false }

export function AuthProvider({ children }) {
  const navigation = useNavigate()
  const [showState, setShowState] = useState(initialShow)

  // also. every time you refresh, you need to call getMyProfile.
  // check the lab solution for more info
  // you did you put any url to your app.
  // so by default its going to whatever your browser url is.
  const getMyProfile = async (updateInBackground) => {
    if (!updateInBackground) setShowState(initialShow)
    setShowState(await produce(updateInBackground ? initialShow : showState, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: 'http://localhost:3000/api/my/profile'
        })
        draft.data = resp.data
      } catch (err) {
        draft.error = err.response.data
      } finally {
        draft.loading = false
      }
    }))
  }

  // your resp.data is the user. you don't need to use resp.data.user
  const signup = async (data) => {
    setShowState(await produce(showState, async (draft) => { draft.authenticating = true }))
    setShowState(await produce(showState, async (draft) => {
      try {
        const resp = await axios({
          method: 'POST',
          url: 'http://localhost:3000/api/user/signup',
          data
        })
        draft.data = resp.data
        navigation('/auth/login')
      } catch (err) {
        renderErrors(err)
      }
    }))
  }

  const login = async (data) => {
    setShowState(await produce(showState, async (draft) => { draft.authenticating = true }))
    setShowState(await produce(showState, async (draft) => {
      try {
        const resp = await axios({
          method: 'POST',
          url: 'http://localhost:3000/api/user/login',
          data
        })
        draft.data = resp.data
        navigation('/')
      } catch (err) {
        renderErrors(err)
      }
    }))
  }

  const logout = async () => {
    setShowState(await produce(showState, async (draft) => { draft.unAuthenticating = true }))
    setShowState(await produce(showState, async (draft) => {
      try {
        await axios({
          method: 'DELETE',
          url: 'http://localhost:3000/api/user/logout'
        })
        draft.data = null
        navigation('/auth/login')
      } catch (err) {
        renderErrors(err)
      }
    }))
  }

  const contextData = {
    show: showState,
    getMyProfile,
    signup,
    login,
    logout
  }

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}

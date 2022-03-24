import React, { useState, createContext, useContext } from 'react'
import axios from 'axios'
import produce from 'immer'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { renderErrors } from './_utils'

const AuthContext = createContext()

const initialShow = { data: null, error: null, loading: true, authenticating: false, unAuthenticating: false }

export function AuthProvider({ children }) {
  const navigation = useNavigate()
  const [showState, setShowState] = useState(initialShow)

  const getMyProfile = async (updateInBackground) => {
    if (!updateInBackground) setShowState(initialShow)
    setShowState(await produce(updateInBackground ? initialShow : showState, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: ''
        })
        draft.data = resp.data.user
      } catch (err) {
        draft.error = err.response.data
      } finally {
        draft.loading = false
      }
    }))
  }

  const signup = async (data) => {
    setShowState(await produce(showState, async (draft) => { draft.authenticating = true }))
    setShowState(await produce(showState, async (draft) => {
      try {
        const resp = await axios({
          method: 'POST',
          url: 'http://localhost:3000/api/user/signup',
          data
        })
        draft.data = resp.data.user
        navigation('/auth/login')
      } catch (err) {
        switch (err.response.status) {
          case 406: {
            Object.entries(err.response.data).forEach((error) => {
              toast.error(error[1])
            })
            break
          }
          default: {
            toast.error('Something is wrong with server')
          }
        }
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
        draft.data = resp.data.user
        navigation('/guitars')
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
        console.log(err) // eslint-disable-line
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

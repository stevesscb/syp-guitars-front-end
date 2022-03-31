import React, { useState, createContext, useContext } from 'react'
import axios from 'axios'
import produce from 'immer'
import { useNavigate } from 'react-router-dom'
import { serialize } from 'object-to-formdata'

import { renderErrors } from '@/contexts/_utils'

const MyGuitarsContext = createContext()

const initialIndex = { data: [], error: null, loading: true }
const initialShow = { data: null, error: null, loading: true }

export function MyGuitarsProvider({ children }) {
  const navigation = useNavigate()
  const [indexState, setIndexState] = useState(initialIndex)
  const [showState, setShowState] = useState(initialShow)

  const getMyGuitars = async () => {
    setIndexState(initialIndex)
    setIndexState(await produce(initialIndex, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: 'http://localhost:3000/api/my/guitars'
        })
        draft.data = resp.data
      } catch (err) {
        // draft.error = err.response.data
        renderErrors(err)
      } finally {
        draft.loading = false
      }
    }))
  }

  const getMyGuitar = async (id) => {
    setShowState(initialShow)
    setShowState(await produce(initialShow, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: `http://localhost:3000/api/my/guitars/${id}`
        })
        draft.data = resp.data
      } catch (err) {
        draft.error = err.response.data
        renderErrors(err)
      } finally {
        draft.loading = false
      }
    }))
  }

  const createMyGuitar = async (data) => {
    try {
      const resp = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/my/guitars/create',
        data: serialize(data, { indices: true })
      })
      navigation(`/my/guitars/${resp.data.id}`)
    } catch (err) {
      renderErrors(err)
    }
  }

  const updateMyGuitar = async (data) => {
    try {
      const resp = await axios({
        method: 'PUT',
        url: `http://localhost:3000/api/my/guitars/${data.id}`,
        data: serialize(data, { indices: true })
      })
      navigation(`/my/guitars/${resp.data.id}`)
    } catch (err) {
      renderErrors(err)
    }
  }

  const deleteMyGuitar = async (data) => {
    try {
      await axios({
        method: 'DELETE',
        url: `http://localhost:3000/api/my/guitars/${data.id}`
      })
      navigation('/my/guitars')
    } catch (err) {
      renderErrors(err)
    }
  }

  const contextData = {
    index: indexState,
    getMyGuitars,
    show: showState,
    getMyGuitar,
    createMyGuitar,
    updateMyGuitar,
    deleteMyGuitar
  }

  return <MyGuitarsContext.Provider value={contextData}>{children}</MyGuitarsContext.Provider>
}

export function useMyGuitars() {
  return useContext(MyGuitarsContext)
}

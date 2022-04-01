import React, { useState, createContext, useContext } from 'react'
import axios from 'axios'
import produce from 'immer'

const GuitarsContext = createContext()

const initialIndex = { data: [], error: null, loading: true }
const initialShow = { data: null, error: null, loading: true }

export function GuitarsProvider({ children }) {
  const [indexState, setIndexState] = useState(initialIndex)
  const [showState, setShowState] = useState(initialShow)

  const getGuitars = async () => {
    setIndexState(initialIndex)
    setIndexState(await produce(initialIndex, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: `${process.env.API_URL}/api/guitars`
        })
        draft.data = resp.data
      } catch (err) {
        draft.error = err.response.data
      } finally {
        draft.loading = false
      }
    }))
  }

  const getGuitar = async (id) => {
    setShowState(initialShow)
    setShowState(await produce(initialShow, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: `${process.env.API_URL}/api/guitars/${id}`
        })
        draft.data = resp.data
      } catch (err) {
        draft.error = err.response.data
      } finally {
        draft.loading = false
      }
    }))
  }

  const contextData = {
    index: indexState,
    getGuitars,
    show: showState,
    getGuitar
  }

  return <GuitarsContext.Provider value={contextData}>{children}</GuitarsContext.Provider>
}

export function useGuitars() {
  return useContext(GuitarsContext)
}

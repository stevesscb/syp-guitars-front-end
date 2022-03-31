import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useMyGuitars } from '@/contexts/MyGuitars'

import FormsGuitarsChange from '@/forms/guitars/Change'

function PagesMyGuitarsEdit() {
  const { id } = useParams()
  const { show: { data: myGuitar }, getMyGuitar, updateMyGuitar } = useMyGuitars()

  useEffect(() => {
    getMyGuitar(id)
  }, [])

  if (!myGuitar) return <h1 className="text-center">Guitar {id} Not Found</h1>

  return (
    <div id="pages-my-guitars-edit" className="container" style={{ maxWidth: '600px' }}>
      <h4 className="text-center pb-3" style={{ fontFamily: 'Palette Mosaic' }}>Edit Guitar</h4>
      <FormsGuitarsChange
        onSubmit={updateMyGuitar}
        initialValues={myGuitar}
      />
    </div>
  )
}

export default PagesMyGuitarsEdit

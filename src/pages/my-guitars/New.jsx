import React from 'react'

import { useMyGuitars } from '@/contexts/MyGuitars'

import FormsGuitarsChange from '@/forms/guitars/Change'

import LayoutsHeader from '@/layouts/Header'

function PagesMyGuitarsNew() {
  const { createMyGuitar } = useMyGuitars()

  return (
    <div id="pages-new-guitar" className="container">
      <LayoutsHeader />
      <h4 className="text-center pb-3" style={{ fontFamily: 'Palette Mosaic' }}>Post Guitar</h4>
      <FormsGuitarsChange
        onSubmit={createMyGuitar}
      />
    </div>
  )
}

export default PagesMyGuitarsNew

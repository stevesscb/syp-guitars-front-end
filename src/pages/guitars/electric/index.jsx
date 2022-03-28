/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import LayoutsHeader from '@/layouts/Header'
import ComponentsCards from '@/components/Cards'

function PagesGuitarsElectric() {
  return (
    <div id="pages-guitars-electric" className="container">
      <LayoutsHeader />
      <h6 className="text-center mb-5" style={{ fontFamily: 'Gloria Hallelujah', fontSize: '1.5em' }}>ELECTRIC GUITARS</h6>
      <ComponentsCards />
    </div>
  )
}

export default PagesGuitarsElectric

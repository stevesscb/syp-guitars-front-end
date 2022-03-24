/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import ComponentsCarousel from '@/components/Carousel'

function PagesHome() {
  return (
    <div id="pages-home" className="container">
      <header className="text-center">
        <h1>SYP GUITARS</h1>
        <h4>HK's Pre Owned Guitar Marketplace</h4>
      </header>
      <ComponentsCarousel />
      <h6 className="text-center">Our Story</h6>
      <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includi</p>
    </div>

  )
}

export default PagesHome

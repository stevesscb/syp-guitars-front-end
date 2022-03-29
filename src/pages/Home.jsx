/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import ComponentsCarousel from '@/components/Carousel'
import LayoutsHeader from '@/layouts/Header'

import Logo from '@/images/pngwing.png'

function PagesHome() {
  return (
    <div id="pages-home" className="container">
      <LayoutsHeader />
      <h4 style={{ fontFamily: 'Palette Mosaic', fontSize: '2em', textAlign: 'center' }}>Currently for sale!</h4>
      <ComponentsCarousel />
      <div id="bio" className="m-5">
        <h4 className="text-center m-5" style={{ fontFamily: 'Gloria Hallelujah', fontSize: '2.5em' }}>My Story...</h4>
        <p style={{ fontFamily: 'poppins', fontWeight: '500', backgroundColor: 'rgba(183, 191, 197, 0.6)' }}>5 years ago I arrived in Hong Kong for the first time - it was a dream come true! I will never forget the moment I stepped off the plane... The sudden rush of humid air, the bustling noise, I felt the excitement of the city  instantly. All this was also mixed in with the amazing scenery of the massive green mountains that wrapped around me. Just as I gathered my thoughts I was rushed off into a taxi and set off for my hotel. Once I had checked in and took the lift up to the 80th floor, I walked into my room straight for the fridge - grabbed a beer, cracked it open and looked out over the harbour and suddenly it hit me. - this place needs an online pre owned guitar market!<br />I bring you<strong> SYP Guitars.</strong></p>
        <p style={{ fontFamily: 'poppins', fontWeight: '500', backgroundColor: 'rgba(183, 191, 197, 0.6)' }}>Here you can find a quick and easy online market place to buy and sell your guitars! I want to make this process as easy as possible by getting straight to the point. You can filter through <strong>electric</strong> or <strong>acoustic,</strong> from there you can browse the details with <strong>'make' 'model' 'year' 'price'</strong> and <strong>'description'</strong> each add will also include the sellers name and preferred contact - there's also a chat feature if your feeling extra social!</p>
        <strong style={{ fontFamily: 'Gloria Hallelujah', fontSize: '2em' }}>Happy trading!</strong>
        <div className="image-container d-flex justify-content-center">
          <img src={Logo} className="m-3" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default PagesHome

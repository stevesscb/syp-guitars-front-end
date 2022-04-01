import React, { useEffect } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import { useGuitars } from '@/contexts/Guitars'

function ComponentsCarousel() {
  const { index: { data: guitars }, getGuitars } = useGuitars()

  useEffect(() => {
    getGuitars()
  }, [])

  return (
    <Carousel fade>
      {
        guitars?.length > 0 && guitars.map((guitar) => (
          guitar.images.map((image) => (
            <Carousel.Item>
              <img
                id="carousel-images-home"
                className="d-block w-100"
                src={image.url}
                alt="First slide"
              />
            </Carousel.Item>
          ))
        ))
      }
    </Carousel>
  )
}

export default ComponentsCarousel

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
                className="d-block w-100"
                src={image.url}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 />
                <p />
              </Carousel.Caption>
            </Carousel.Item>
          ))
        ))
      }
    </Carousel>
  )
}

export default ComponentsCarousel

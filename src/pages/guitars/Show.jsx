import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useGuitars } from '@/contexts/Guitars'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function PagesGuitarsShow() {
  const { id } = useParams()
  const { show: { data: guitar }, getGuitar } = useGuitars()

  useEffect(() => {
    getGuitar(id)
  }, [])

  if (!guitar) return <h1 className="text-center">Guitar {id} Not Found</h1>

  return (
    <div className="my-guitars-pages-caption">
      <h4 className="text-center" style={{ fontFamily: 'Palette Mosaic' }}>For Sale</h4>
      <div id="pages-my-guitars-show" className="container d-flex justify-content-center">
        <Card style={{ width: '40rem' }}>

          <Carousel>
            {
            guitar.images.map((image) => (
              <Carousel.Item>
                <img
                  id="carousel-image"
                  className="d-block w-100"
                  style={{ height: '500px', objectFit: 'contain' }}
                  src={image.url}
                  alt="First slide"
                />
              </Carousel.Item>
            ))
        }
          </Carousel>

          <Card.Body>
            <Card.Text>
              <ul>
                <li>Make: {guitar.make}</li>
                <li>Model: {guitar.model}</li>
                <li>Year: {guitar.year}</li>
                <li>Price: {guitar.price}</li>
                <li>Description: {guitar.description}</li>
              </ul>
            </Card.Text>
            <Button variant="success" className="m-3">Chat</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default PagesGuitarsShow

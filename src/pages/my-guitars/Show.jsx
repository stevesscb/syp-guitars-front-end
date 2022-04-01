import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useMyGuitars } from '@/contexts/MyGuitars'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function PagesMyGuitarsShow() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { show: { data: myGuitar }, getMyGuitar, deleteMyGuitar } = useMyGuitars()

  useEffect(() => {
    getMyGuitar(id)
  }, [])

  if (!myGuitar) return <h1 className="text-center">Guitar {id} Not Found</h1>

  return (
    <div className="my-guitars-pages-caption">
      <h4 className="text-center" style={{ fontFamily: 'Palette Mosaic' }}>My Guitars</h4>
      <div id="pages-my-guitars-show" className="container d-flex justify-content-center">
        <Card style={{ width: '40rem' }}>

          <Carousel>
            {
            myGuitar.images.map((image) => (
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
                <li>Make: {myGuitar.make}</li>
                <li>Model: {myGuitar.model}</li>
                <li>Year: {myGuitar.year}</li>
                <li>Price: {myGuitar.price}</li>
                <li>Description: {myGuitar.description}</li>
              </ul>
            </Card.Text>
            <Button key={myGuitar.id} onClick={() => navigate(`/my/guitars/${myGuitar.id}/edit`)} variant="success" className="m-3">Edit</Button>
            <Button
              variant="danger"
              className="m-3"
              type="button"
              onClick={() => {
              // eslint-disable-next-line
              window.confirm('Are you sure you want to delete this guitar?') && deleteMyGuitar(myGuitar)
              }}
            >Delete</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default PagesMyGuitarsShow

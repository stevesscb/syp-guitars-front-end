/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import { useGuitars } from '@/contexts/Guitars'

function PagesGuitarsIndex() {
  const navigate = useNavigate()
  const { index: { data: guitars }, getGuitars } = useGuitars()

  useEffect(() => {
    getGuitars()
  }, [])

  return (
    <div className="my-guitars-pages-caption">
      <h4 className="text-center pb-3" style={{ fontFamily: 'Palette Mosaic' }}>For Sale</h4>
      <div id="pages-my-guitars-index" className="container d-flex justify-content-center">
        <Row xs={1} md={3} className="g-4">
          {
          guitars.map((guitar) => (
            <Col className="d-flex justify-content-center">
              <Card border="dark" style={{ width: '23rem' }}>
                <Card.Img variant="top" src={guitar?.images?.[0]?.url} className="justify-content-center" />
                <Card.Body style={{ backgroundColor: '#ECF0F1' }}>
                  <Card.Title />
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>MAKE: {guitar.make}</ListGroupItem>
                    <ListGroupItem>MODEL: {guitar.model}</ListGroupItem>
                    <ListGroupItem>YEAR: {guitar.year}</ListGroupItem>
                    <ListGroupItem>PRICE: {guitar.price}</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body style={{ backgroundColor: '#ECF0F1' }}>
                  <Button key={guitar.id} onClick={() => navigate(`/guitars/${guitar.id}`)}>
                    More...
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
        </Row>
      </div>
    </div>

  )
}

export default PagesGuitarsIndex

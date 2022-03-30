/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import { useMyGuitars } from '@/contexts/MyGuitars'

function PagesMyGuitarsIndex() {
  const navigate = useNavigate()
  const { index: { data: myGuitars }, getMyGuitars } = useMyGuitars()

  console.log(myGuitars)

  useEffect(() => {
    getMyGuitars()
  }, [])

  return (
    <div id="pages-my-guitars-index" className="container">
      <h4 className="text-center pb-3" style={{ fontFamily: 'Palette Mosaic' }}>My Guitars</h4>
      <Row xs={1} md={3} className="g-4">
        {
          myGuitars.map((myGuitar) => (
            <Col className="d-flex justify-content-center">
              <Card border="dark" style={{ width: '30rem' }}>
                <Card.Img variant="top" src={myGuitar?.images?.[0]?.url} className="justify-content-center" />
                <Card.Body style={{ backgroundColor: '#ECF0F1' }}>
                  <Card.Title />
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>MAKE: {myGuitar.make}</ListGroupItem>
                    <ListGroupItem>MODEL: {myGuitar.model}</ListGroupItem>
                    <ListGroupItem>YEAR: {myGuitar.year}</ListGroupItem>
                    <ListGroupItem>PRICE: {myGuitar.price}</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body style={{ backgroundColor: '#ECF0F1' }}>
                  <Button as={NavLink} to=":id" variant="success" size="sm" active>
                    More...
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>

  )
}

export default PagesMyGuitarsIndex
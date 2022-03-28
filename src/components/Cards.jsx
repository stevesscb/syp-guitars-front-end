/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import { Row, Col } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function ComponentsCards() {
  return (

    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col className="d-flex justify-content-center">
          <Card border="dark" style={{ width: '30rem' }}>
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0255/8659/7968/products/JH-363.jpg" className="justify-content-center" />
            <Card.Body style={{ backgroundColor: '#ECF0F1' }}>
              <Card.Title />
              <ListGroup className="list-group-flush">
                <ListGroupItem>MAKE:</ListGroupItem>
                <ListGroupItem>MODEL:</ListGroupItem>
                <ListGroupItem>YEAR:</ListGroupItem>
                <ListGroupItem>PRICE:</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Body style={{ backgroundColor: '#ECF0F1' }}>
              <Button as={NavLink} to="/" variant="success" size="sm" active>
                More...
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

  )
}

export default ComponentsCards

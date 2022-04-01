import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

import { useAuth } from '@/contexts/Auth'

function LayoutsNavbar() {
  const { show: { data: currentUser }, logout } = useAuth()

  return (
    <Navbar style={{ backgroundColor: 'rgb(149, 123, 94)' }} expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">For Sale</Nav.Link>
            {
              currentUser ? (
                <>
                  <Nav.Link as={NavLink} to="/my/guitars">My Guitars</Nav.Link>
                  <Nav.Link as={NavLink} to="/my/guitars/new">Post Guitar</Nav.Link>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                  <Nav.Link as={NavLink} to="/about">About us</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/auth/signup">Sign up</Nav.Link>
                  <Nav.Link as={NavLink} to="/auth/login">Log in</Nav.Link>
                  <Nav.Link as={NavLink} to="/about">About us</Nav.Link>
                </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default LayoutsNavbar

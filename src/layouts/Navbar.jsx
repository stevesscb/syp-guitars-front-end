import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'

function LayoutsNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/auth/signup">Sign up</Nav.Link>
            <Nav.Link as={NavLink} to="/auth/login">Log in</Nav.Link>
            <Nav.Link as={NavLink} to="/my-guitars/new">Post Guitar</Nav.Link>
            <NavDropdown title="Guitars" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/">Electric</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/">Acoustic</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default LayoutsNavbar

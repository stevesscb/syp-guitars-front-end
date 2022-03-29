import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'

import { useAuth } from '@/contexts/Auth'

function LayoutsNavbar() {
  const { show: { data: currentUser }, logout } = useAuth()

  return (
    <Navbar style={{ backgroundColor: '#E5E8E8', minHeight: '100px' }} expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            {
              currentUser ? (
                <>
                  <Nav.Link as={NavLink} to="/my/guitars">My Guitars</Nav.Link>
                  <Nav.Link as={NavLink} to="/my/guitars/new">Post Guitar</Nav.Link>
                  <NavDropdown title="Guitars" id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/guitars/electric">Electric</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/guitars/acoustic">Acoustic</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/auth/signup">Sign up</Nav.Link>
                  <Nav.Link as={NavLink} to="/auth/login">Log in</Nav.Link>

                  <NavDropdown title="Guitars" id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/guitars/electric">Electric</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/guitars/acoustic">Acoustic</NavDropdown.Item>
                  </NavDropdown>
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

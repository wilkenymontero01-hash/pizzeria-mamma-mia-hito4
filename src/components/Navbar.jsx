
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap'

const Navbar = () => {
  const token = false; 

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Container fluid>
        <BootstrapNavbar.Brand as={Link} to="/">Pizzería Mamma Mía!</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="btn btn-outline-light btn-sm me-2 mb-1 mb-lg-0">🍕 Home</Link>
            {token ? (
              <>
                <Link to="/profile" className="btn btn-outline-light btn-sm me-2 mb-1 mb-lg-0">🔓 Profile</Link>
                <Button variant="outline-light" size="sm" className="me-2 mb-1 mb-lg-0">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light btn-sm me-2 mb-1 mb-lg-0">🔐 Login</Link>
                <Link to="/register" className="btn btn-outline-light btn-sm me-2 mb-1 mb-lg-0">🔐 Register</Link>
              </>
            )}
          </Nav>
          <Nav>
            <Link to="/cart">
              <Button variant="outline-info" size="sm">
                🛒 Total: $25.000
              </Button>
            </Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
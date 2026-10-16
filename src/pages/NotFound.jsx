
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container className="text-center my-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2>¡Oops! La página que buscas no existe.</h2>
      <p className="text-muted">Parece que te has perdido del camino a la pizzería.</p>
      <Link to="/">
        <Button variant="dark">Volver al Inicio</Button>
      </Link>
    </Container>
  )
}

export default NotFound
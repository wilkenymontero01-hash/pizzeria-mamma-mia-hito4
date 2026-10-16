
import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'

const Profile = () => {
  const handleLogout = () => {
    alert('Sesión cerrada (Estático por ahora)')
  }

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card style={{ width: '28rem' }} className="p-4 shadow-sm text-center">
        <Card.Body>
          <Card.Title className="mb-3">Mi Perfil</Card.Title>
          <Card.Text className="text-muted mb-4">
            <strong>Email:</strong> usuario@example.com
          </Card.Text>
          <Button variant="danger" onClick={handleLogout} className="w-100">
            Cerrar Sesión
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Profile
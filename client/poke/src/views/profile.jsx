import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function Profile() {
  // Example data for past orders
  const pastOrders = [
    'Poke Bowl with Salmon and Avocado',
    'Poke Bowl with Tuna and Mango',
    'Poke Bowl with Shrimp and Seaweed',
  ];

  // Example profile data
  const profileData = {
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
  };

  return (
    <Container className="mt-5">
      <Row>
        {/* Profile Section */}
        <Col md={4}>
          <h3>Profile</h3>
          <ListGroup>
            <ListGroup.Item><strong>Name:</strong> {profileData.name}</ListGroup.Item>
            <ListGroup.Item><strong>Surname:</strong> {profileData.surname}</ListGroup.Item>
            <ListGroup.Item><strong>Email:</strong> {profileData.email}</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Past Orders Section */}
        <Col md={8}>
          <h3>Past Orders</h3>
          <ListGroup>
            {pastOrders.map((order, index) => (
              <ListGroup.Item key={index}>{order}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      {/* Logout Button */}
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="dark" size="md">Logout</Button>
        </Col>
      </Row>
    </Container>
  );
}
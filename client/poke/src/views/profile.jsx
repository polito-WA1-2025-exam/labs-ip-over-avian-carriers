import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function Profile() {
  // Example data for past orders
  const pastOrders = [
    {
      id: 1,
      totalBowls: 3,
      totalPrice: 45.99,
      details: [
        { bowl: 'Salmon and Avocado', price: 15.99 },
        { bowl: 'Tuna and Mango', price: 14.99 },
        { bowl: 'Shrimp and Seaweed', price: 14.99 },
      ],
    },
    {
      id: 2,
      totalBowls: 2,
      totalPrice: 29.98,
      details: [
        { bowl: 'Chicken Teriyaki', price: 14.99 },
        { bowl: 'Vegetarian Bowl', price: 14.99 },
      ],
    },
  ];

  // Example profile data
  const profileData = {
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
  };

  // State to track which order's details are visible
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
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
            {pastOrders.map((order) => (
              <React.Fragment key={order.id}>
                <ListGroup.Item
                  action
                  onClick={() => toggleOrderDetails(order.id)}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>
                    <strong>Total Bowls:</strong> {order.totalBowls}
                  </span>
                  <span>
                    <strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}
                  </span>
                </ListGroup.Item>
                {expandedOrder === order.id && (
                  <ListGroup.Item>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Bowl</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.details.map((detail, index) => (
                          <tr key={index}>
                            <td>{detail.bowl}</td>
                            <td>${detail.price.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </ListGroup.Item>
                )}
              </React.Fragment>
            ))}
          </ListGroup>
        </Col>
      </Row>

      {/* Logout Button */}
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="danger" size="lg">Logout</Button>
        </Col>
      </Row>
    </Container>
  );
}
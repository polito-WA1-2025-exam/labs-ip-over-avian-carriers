import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { getUserOrders } from '../../APIs/API';

export default function Profile() {

  // Example profile data
  const profileData = {
    name: 'Tizio',
    surname: 'Caio',
    email: 'prova@mail.com',
  };

  // State to track which order's details are visible
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersData = await getUserOrders(profileData.email); // Fetch orders dynamically
        setOrders(ordersData); // Set the fetched orders
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


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
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ListGroup>
              {orders.map((order) => (
                <React.Fragment key={order.orderId}>
                  <ListGroup.Item
                    action
                    onClick={() => toggleOrderDetails(order.orderId)}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>
                      <strong>Total Bowls:</strong> {order.listPokeBowl.length}
                    </span>
                    <span>
                      <strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}
                    </span>
                  </ListGroup.Item>
                  {expandedOrder === order.orderId && (
                    <ListGroup.Item>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>Base</th>
                            <th>Proteins</th>
                            <th>Ingredients</th>
                            <th>Size</th>
                            </tr>
                        </thead>
                        <tbody>
                          {order.listPokeBowl.map((bowl, index) => (
                            <tr key={index}>
                              <td>{bowl.base}</td>
                              <td>
                                {bowl.proteins.length > 0
                                  ? bowl.proteins.join(', ')
                                  : 'None'}
                              </td>
                              <td>
                                {bowl.ingredients.length > 0
                                  ? bowl.ingredients.join(', ')
                                  : 'None'}
                              </td>
                              <td>{bowl.sizeId}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                      <p><strong>Notes:</strong> {order.notes || 'No notes provided'}</p>
                    </ListGroup.Item>
                  )}
                </React.Fragment>
              ))}
            </ListGroup>
          )}
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
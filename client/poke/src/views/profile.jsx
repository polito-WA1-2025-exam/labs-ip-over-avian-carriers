import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { getUserOrders, logoutUser } from '../../APIs/API';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router';

export default function Profile() {
  
  const {user, setUser} = useUser(); // Get the user context
  const navigate = useNavigate(); // Get the navigate function from react-router

  // State to track which order's details are visible
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if user is not logged in
    }
  }, [user, navigate]);
  
  useEffect(() => {
    console.log('User:', user); // Log the user object
    const fetchData = async () => {
      try {
        if (user) {
          const ordersData = await getUserOrders(user.email); // Fetch orders dynamically
          setOrders(ordersData); // Set the fetched orders
        }  
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user]);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

    // Logout handler
  const handleLogout = async () => {
      try {
        await logoutUser(); // Call the logout API
        setUser(null); // Clear the user context
        console.log('User logged out successfully');
        navigate('/login'); // Redirect to login page
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

  
  if (!user) {
    return <div>Please log in to view your profile.</div>; // Show a message if user is not logged in
  }

  return (
    <Container className="mt-5">
      <Row>
        {/* Profile Section */}
        <Col md={4}>
          <h3>Profile</h3>
          <ListGroup>
            <ListGroup.Item><strong>Name:</strong> {user.name}</ListGroup.Item>
            <ListGroup.Item><strong>Surname:</strong> {user.surname}</ListGroup.Item>
            <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
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
          <Button variant="danger" size="lg" onClick={handleLogout}>Logout</Button>
        </Col>
      </Row>
    </Container>
  );
}
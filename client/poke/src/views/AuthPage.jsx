import React from 'react';
import { useActionState } from 'react';
import { useNavigate } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { loginUser } from '../../APIs/API';
import { useUser } from '../contexts/UserContext';


// Action function to handle form submission
const actionFunction = async (prevState, formData, setUser, navigate) => {
  // Convert FormData to a plain object
  const data = Object.fromEntries(formData.entries());
  console.log('Submitted Data:', data);

  try {
    // Call the API to log in the user
    const user = await loginUser(data.email, data.password);
    console.log('User logged in:', user);

    // Update the UserContext with the logged-in user's data
    setUser(user);

    navigate('/Profile'); // Redirect to the home page after successful login

    return {...prevState, ...data, loginResult: user};
  } catch (error) {
    console.error('Login error:', error);
    // Handle the error (e.g., show a message to the user)
    return { ...prevState, ...data, loginResult: null}
  }
};

export default function Login() {
  const { setUser } = useUser(); // Get the setUser function from UserContext
  const navigate = useNavigate(); // Get the navigate function from react-router
  const [formState, handleSubmit] = useActionState((prevState, formData) => actionFunction(prevState, formData, setUser, navigate), {
    email: '',
    password: '',
    loginResult: null,
  });
    // Custom handleSubmit to create FormData
  const customHandleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission
      const formData = new FormData(event.target); // Create FormData from the form
      handleSubmit(formData); // Pass FormData to the action function
      setUser((prevUser) => ({...prevUser}));
    };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div style={{ width: '400px' }}> {/* Limit the width */}
        <h1 className="text-center mb-4">Login</h1>
        <Form onSubmit={customHandleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              defaultValue={formState.email}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              defaultValue={formState.password}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
        {formState.loginResult === null ? null : formState.loginResult ? (
          <p className="text-success mt-3">Login successful!</p>
        ) : (
          <p className="text-danger mt-3">Login failed. Please try again.</p>
        )}
      </div>
    </Container>
  );
}
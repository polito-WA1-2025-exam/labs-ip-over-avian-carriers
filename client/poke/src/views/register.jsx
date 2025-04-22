import React from 'react';
import { useActionState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// Action function to handle form submission
const actionFunction = (prevState, formData) => {
  // Convert FormData to a plain object
  const data = Object.fromEntries(formData.entries());
  console.log('Previous State:', prevState);
  console.log('Submitted Data:', data);

  // Return the new state (e.g., updated form state)
  return { ...prevState, ...data };
};

export default function Register() {
  const [formState, handleSubmit] = useActionState(actionFunction, {
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div style={{ width: '400px' }}> {/* Limit the width */}
        <h1 className="text-center mb-4">Register an account</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              defaultValue={formState.name}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your surname"
              name="surname"
              defaultValue={formState.surname}
              required
            />
          </Form.Group>

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
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
}
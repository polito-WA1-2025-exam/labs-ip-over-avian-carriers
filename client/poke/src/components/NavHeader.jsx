import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '/assets/imgs/logo.png';
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router';

export default function NavHeader() {

    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Image src={logo} thumbnail fluid width={80} height={75}/></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "nav-link active-link" : "nav-link"
                            }>Home</NavLink>
            <NavLink to="/menu" className={({ isActive }) =>
                                isActive ? "nav-link active-link" : "nav-link"
                            }>Menu</NavLink>
            <NavLink to="/cart" className={({ isActive }) =>
                                isActive ? "nav-link active-link" : "nav-link"
                            }>Cart</NavLink>
          </Nav>
          <NavLink to="/profile">
            <CgProfile size={30} color="white" />
          </NavLink>
        </Container>
      </Navbar>
    )
}


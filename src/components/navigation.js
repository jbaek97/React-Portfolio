import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="AboutMe">Joseph Baek</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="AboutMe">About Me</Nav.Link>
            <Nav.Link href="Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
            <Nav.Link href="Resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;
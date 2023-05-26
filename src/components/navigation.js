import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/React-Portfolio">Joseph Baek</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/React-Portfolio/AboutMe">About Me</Nav.Link>
            <Nav.Link href="/React-Portfolio/Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/React-Portfolio/Contact">Contact</Nav.Link>
            <Nav.Link href="/React-Portfolio/Resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;
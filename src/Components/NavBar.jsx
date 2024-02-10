import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="/logo.png" alt="Logo" style={{ marginLeft: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ width: "90%" }}>
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/categories" className="nav-link">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/explore" className="nav-link">
              Explore
            </Nav.Link>
            <Nav.Link as={Link} to="/ContactUs" className="nav-link">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="light" className="login-btn">
              User: tickle122
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

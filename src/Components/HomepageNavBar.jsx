import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg" style={{ color: "white" }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="/logoWhite.png" alt="Logo" style={{ marginLeft: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ width: "80%" }}>
            <Nav.Link
              as={Link}
              to="/"
              className="nav-link"
              style={{ color: "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/categories"
              className="nav-link"
              style={{ color: "white" }}
            >
              Categories
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/explore"
              className="nav-link"
              style={{ color: "white" }}
            >
              Explore
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/ContactUs"
              className="nav-link"
              style={{ color: "white" }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="light"
              className="login-btn"
              style={{ marginRight: "50px" }}
            >
              User: tickle122
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

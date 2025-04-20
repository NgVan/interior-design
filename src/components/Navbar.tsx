import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BootstrapNavbar 
      expanded={expanded} 
      expand="lg" 
      bg="light" 
      variant="light" 
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src="/logo.png" 
            alt="Interior Design Logo" 
            height="40" 
            className="d-inline-block align-top me-2"
          />
          <span className="brand-text">Interior Design</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Trang chủ</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>Giới thiệu</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>Dự án</Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>Dịch vụ</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Liên hệ</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar; 
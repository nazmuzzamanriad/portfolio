import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Nazmuzzaman Riad</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home" >Home</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#">My Project</Nav.Link>
        <Nav.Link href="#aboutme" path='/aboutme'>About Me</Nav.Link>
        <Nav.Link href="#myblogs">My Blogs</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="https://drive.google.com/file/d/1-mR6OFBDp0So8XnVyzf79vzykzBMKT-R/view?usp=sharing" target="_blank"> Resume</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Navigation;
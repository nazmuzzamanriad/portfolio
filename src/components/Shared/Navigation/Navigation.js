import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Nazmuzzaman Riad</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link  ><Link style={{textDecoration:'none'}} smooth to='/#home'> Home</Link></Nav.Link>
       
        <Nav.Link ><Link style={{textDecoration:'none'}} smooth to='/#skills'> Skills</Link></Nav.Link>
        <Nav.Link href="#"><Link  style={{textDecoration:'none'}}smooth to='/#projects'> Projects</Link></Nav.Link>
        
        <Nav.Link ><Link style={{textDecoration:'none'}} smooth to='/#about'> About Me</Link></Nav.Link>
        <Nav.Link ><Link style={{textDecoration:'none'}} smooth to='/#blogs'> Blogs</Link></Nav.Link>
        <Nav.Link ><Link style={{textDecoration:'none'}} smooth to='/#contact'> Contact</Link></Nav.Link>
        <Nav.Link href="https://drive.google.com/file/d/1-mR6OFBDp0So8XnVyzf79vzykzBMKT-R/view?usp=sharing" target="_blank"> Resume</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Navigation;
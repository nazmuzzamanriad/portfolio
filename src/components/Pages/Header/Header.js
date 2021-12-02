import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import coding from '../../../images/d41586-019-00653-5_16459152.jpg'
import './Header.css'

const Header = () => {
    return (
        
     <div className='header'>
            <Container >

<Row className='d-flex justify-content-center align-items-center'>
  
  <Col  sm={12} md={8}>
    <h1>Hello, i'm Nazmuzzaman Riad</h1>
    <h4>Front-End Developer</h4>
  </Col>
  
  <Col sm={12} md={4}>
   <img src={coding} width='400'  />
  
  </Col>
</Row>

</Container>
     </div>

            
        
    );
};

export default Header;
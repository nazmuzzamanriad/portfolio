import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import person from '../../../images/127785711_3496083637138377_2006032870995331567_n-modified.png'

const AboutMe = () => {
    return (
        <Container>
            <h1 style={{fontWeight:'bold'}}>About Me</h1>
            <div>

  <Row  className='d-flex justify-content-center align-items-center' style={{margin:'20px',padding:'10px'}}>
    <Col sm={12} md={8}>
<div style={{textAlign:'justify'}}>
<strong>Hello! i'm Takida from khulna ,Bangladesh.I am ineterested in full stack web development.I recently graduted in Bachelor of Computer Science and Engineering (2018) from Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj,Bangladesh.
    Looking for a challenging career as part of a progressive organization where my knowledge & skills will be utilized for the growth of the organization. 
    Recent computer science graduate with passion for developing scalable web applications working across the full stack web developer</strong>
</div>

    </Col>
    <Col sm={12} md={4}>
     <img src={person} alt="" srcset="" height='200px'  />
    </Col>
  </Row>

</div>
            
        </Container>
    );
};

export default AboutMe;
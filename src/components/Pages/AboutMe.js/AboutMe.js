import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import person from '../../../images/127785711_3496083637138377_2006032870995331567_n-modified.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const element1 = <FontAwesomeIcon icon={faLinkedin} />
const element2 = <FontAwesomeIcon icon={faGithub} />


const AboutMe = () => {
    return (
        <Container>
            <h1 style={{fontWeight:'bold'}} id='about'>About Me</h1>
            <div>

  <Row  className='d-flex justify-content-center align-items-center' style={{margin:'20px',padding:'10px'}}>
    <Col sm={12} md={8}>
<div style={{textAlign:'justify'}}>
<strong>Hello! i'm Nazmuzzaman Riad.I am from jashore,khulna,Bangladesh.I recently graduated in Electrical and Electronics Engineering(EEE) from American International University-Bangladesh (AIUB).Beside,My study also did course on web development.Looking for a challenging career as a part of progressive organization where my knowledge & skills will be utilized for the growth of the organization.Recent </strong>
</div>
<div>
    <Button style={{margin:'5px'}}><a href="https://www.linkedin.com/in/nazmuzzamanriad/" target="_blank" rel="noopener noreferrer" style={{color:'white',textDecoration:'none'}}> {element1} LinkedIn</a></Button>
    <Button style={{margin:'5px'}}><a href="https://www.linkedin.com/in/nazmuzzamanriad/" target="_blank" rel="noopener noreferrer" style={{color:'white',textDecoration:'none'}}> {element1} LinkedIn</a></Button>

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
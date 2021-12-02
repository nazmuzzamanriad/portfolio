import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <h1 style={{fontWeight:'bold'}}>Contact Me</h1>
  <div className='form'>
  <Container>
     <Form action="https://formspree.io/f/mjvlblea" method="post">
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label  htmlFor="fname" style={{color:'white'}}>Name</Form.Label>
    <Form.Control type='text' name="fname" id="fname" placeholder="Your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label  htmlFor="femail" style={{color:'white'}}>Email address</Form.Label>
    <Form.Control type="email" name="feamil" id="femail" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label htmlFor="ftext" style={{color:'white'}}>Write Your message</Form.Label>
    <Form.Control as="textarea" rows={3} name="ftext" id="ftext" />
  </Form.Group>
  <Button type='submit' className="mb-3">Submit</Button>
</Form>

     </Container>
  </div>
           
            
        </div>
    );
};

export default Contact;


{/* <form action="https://formspree.io/f/mjvlblea" method="post">
<label htmlFor="fname">Name</label>
<input type="text" name="fname" id="fname" /> <br /> <br />
<label htmlFor="femail">Email</label>
<input type="email" name="femail" id="femail" /> <br /> <br />
<label htmlFor="ftextarea">Write Your Message</label> <br /> <br />
<textarea name="ftextarea" id="ftextarea" cols="30" rows="10"></textarea> <br /> <br />
<button type="submit">submit</button>


</form> */}
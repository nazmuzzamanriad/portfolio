import React from 'react';
import { Button, Card, Col, Container, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const element1 = <FontAwesomeIcon icon={faGlobeAsia} />
const element2 = <FontAwesomeIcon icon={faGithub} />

  

const Project = ({project}) => {
    const {  name, img,live,git,technology,features } = project;
    console.log(project)
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               {name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Technology Used</h4>
              <p>
             {technology}
             <h4>Features</h4>
             <p>{features}</p>
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
          <Container>
          <Col>
                <Card>
                    <Card.Img variant="top" src={img}  />
                    <Card.Body className="card-body">
                        <Card.Title><h3> {name}</h3>
                        </Card.Title>
                        <Button style={{margin:'5px'}} variant="primary" ><a style={{color:'white',textDecoration:'none'}} href={live} target="_blank" rel="noopener noreferrer">{element1} Live</a></Button>
                        <Button style={{margin:'5px'}} variant="primary" ><a style={{color:'white',textDecoration:'none'}} href={git}  target="_blank" rel="noopener noreferrer">{element2} GitHub</a></Button>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
        Details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

                    </Card.Body>
                </Card>
            </Col>
          </Container>
            
        </div>
    );
};

export default Project;
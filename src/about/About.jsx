import { Card, ListGroup, Button } from 'react-bootstrap'
import img from '../images/profile.jpg'
import '../App.css'
  function About() {
      return (<> 
      <br />
          <Card className="m-auto" style={{ border:'0px' }}>
              <ListGroup variant="flush">
                  <ListGroup.Item>
                      <h3>Shaharyar-S-Rehman</h3>
                      <h4>Web Developer</h4></ListGroup.Item>
              </ListGroup>
          </Card>
          <br />
          <h1 style={{textAlign: 'center'}} >About</h1>
          <br />
          <Card className="m-auto" style={{ width: '50rem' }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                  <Card.Title>Shaharyar-S-Rehman</Card.Title>
                  <Card.Text>
                      <h3>I am a Computer Science Students And a Web Developer</h3>
                      <ul><h4>I Have Following skills </h4>
                          <li><h5> HTML 5 </h5></li>
                          <li><h5>CSS 3</h5></li>
                          <li><h5>Bootstrap</h5></li>
                          <li><h5>JavaScripT</h5></li>
                          <li><h5>ES6</h5></li>
                          <li><h5>MongoDB</h5></li>
                          <li><h5>NodeJS</h5></li>
                          <li><h5>ReactJS</h5></li>
                          <li><h5>ExpressJS</h5></li>
  
                      </ul>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
  
      </>
      )
  }
  export default About
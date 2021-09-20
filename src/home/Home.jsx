import { Card, ListGroup, Button } from 'react-bootstrap'
import '../App.css'
import img from '../images/profile.jpg'
function Home() {
    return (<> 
    <br />
        <Card className="m-auto namediv" style={{ border: '0px'  }}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3 className="textcolor">Shaharyar-S-Rehman</h3>
                    <h4 className="textcolor">Web Developer</h4></ListGroup.Item>
            </ListGroup>
        </Card>
        <br />
        <h1 style={{textAlign: 'center'}} className="textcolor">Introduction</h1><br />
        <Card className="m-auto main" style={{ width: '50rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body className="cardbody">
                <Card.Title className="textcolor"><h4>Hi! I am <b><i>Shaharyar-S-Rehman.</i></b> </h4></Card.Title>
                <Card.Text>
                    <h5 className="textcolor">I am a Computer Science Students And a Web Developer</h5>
                    <ul><h5 className="textcolor">I Have Following skills </h5>
                        <li><h5 className="textcolor"> HTML 5 </h5></li>
                        <li><h5 className="textcolor">CSS 3</h5></li>
                        <li><h5 className="textcolor">Bootstrap</h5></li>
                        <li><h5 className="textcolor">JavaScripT</h5></li>
                        <li><h5 className="textcolor">ES6</h5></li>
                        <li><h5 className="textcolor">MongoDB</h5></li>
                        <li><h5 className="textcolor">NodeJS</h5></li>
                        <li><h5 className="textcolor">ReactJS</h5></li>
                        <li><h5 className="textcolor">ExpressJS</h5></li>

                    </ul>
                </Card.Text>
                
            </Card.Body>
        </Card>

    </>
    )
}
export default Home
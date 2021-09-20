import { Card, ListGroup, Button } from 'react-bootstrap'
import email from '../images/download.jpg'
import whatsapp from '../images/download (1).jpg'
import facebook from '../images/fb.jpg'
import '../App.css'


function Contact() {
    return (<>
    <br />
        <Card className="m-auto" style={{ border: '0px' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>Shaharyar-S-Rehman</h3>
                    <h4>Web Developer</h4></ListGroup.Item>
            </ListGroup>
        </Card>
        <br />
        <h2 style={{textAlign: 'center'}}>Contact</h2>;
        <div>
        <Card className="m-auto " style={{ width: '20rem' }}>
            <Card.Img variant="top" src={email} />
            <Card.Body>
                <Card.Title>Contact with E-mail</Card.Title>
                <Button variant="primary" href="https://mail.google.com/">Click Here</Button>
            </Card.Body>
        </Card>
        <br />

        <Card className="m-auto" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={whatsapp} />
            <Card.Body>
                <Card.Title>Contact with WhatsApp</Card.Title>
                <Button variant="primary" href="https://wa.me/<03422059965>">Click Here</Button>
            </Card.Body>
            </Card>
            <br />

            <Card className="m-auto" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={facebook} />
            <Card.Body>
                <Card.Title>Contact with Facebook</Card.Title>
                <Button variant="primary" href="http://m.me/<Shaharyar S Rehman>">Click Here</Button>
            </Card.Body>
        </Card>
        </div>
    </>
    )
}
export default Contact
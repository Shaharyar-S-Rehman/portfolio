import { Card, ListGroup, Button } from 'react-bootstrap'
import todo from '../images/todo.png'
import tictactoe from '../images/tic tac to.png'
import stopwatch from '../images/stopwatch.png'
import countdown from '../images/countdown.png'
import apple from '../images/web.png'
import '../App.css'

function Project() {
    return (<>
    <br />
        <Card className="mx-5" style={{ border: '0px' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>Shaharyar-S-Rehman</h3>
                    <h4>Web Developer</h4></ListGroup.Item>
            </ListGroup>
        </Card>
        <br />
        <h1 style={{ marginLeft: '3%' }} >Project</h1><br />


        <Card className="mx-5 " style={{ width: '20rem' }}>
            <Card.Img variant="top" src={todo} />
            <Card.Body>
                <Card.Title><i>Todo-App is most useful app because you can save your daily routine, your task etc. </i></Card.Title>
                <Button variant="primary" href="https://shaharyar-s-rehman.github.io/todoappfirebasedatabase/">Click Here To See </Button>
            </Card.Body>
        </Card>
        <br />
        <Card className="mx-5" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={tictactoe} />
            <Card.Body>
                <Card.Title><i>Think Outside The Box<br />Tic-Tac-Toe</i></Card.Title>
                <Button variant="primary" href=" https://shaharyar-s-rehman.github.io/tic-tac-toe/">Click Here To See</Button>
            </Card.Body>
        </Card>
        <br />
        <Card className="mx-5" style={{ width: '20rem' }}>

            <Card.Img variant="top" src={stopwatch} />
            <Card.Body>
                <Card.Title><i>Stopwatch Never Lies. Speed Kills But Absolute Speed Kills Absolutely.</i></Card.Title>
                <Button variant="primary" href=" https://shaharyar-s-rehman.github.io/StopWatch/">Click Here To See</Button>
            </Card.Body>
        </Card>
        <br />
        <Card className="mx-5" style={{ width: '20rem' }}>

            <Card.Img variant="top" src={countdown} />
            <Card.Body>
                <Card.Title><i>Time Has a Wonderful Way Of Showing Us What Really Matters. </i></Card.Title>
                <Button variant="primary" href=" https://shaharyar-s-rehman.github.io/countdown-timer/">Click Here To See</Button>
            </Card.Body>
        </Card>
        <br />
        <Card className="mx-5" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={apple} />
            <Card.Body>
                <Card.Title><i>Oh, What a Tangled Web We Weave When First We Practice To Believe.</i></Card.Title>
                <Button variant="primary" href=" https://shaharyar-s-rehman.github.io/assignment-7-apple/">Click Here To See</Button>
            </Card.Body>
        </Card>
    </>
    )
}
export default Project
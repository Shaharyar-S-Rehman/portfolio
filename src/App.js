import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./home/Home"
import Contact from "./contact/Contact"
import About from "./about/About"
import Project from "./project/Project"
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function App() {
  let history = useHistory();
  return (
    <>
        <Navbar bg="info" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto ">
              <Nav.Link onClick={()=>{history.push("/")}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{history.push("/About")}}>About</Nav.Link>
              <Nav.Link onClick={()=>{history.push("/Contact")}}>Contact</Nav.Link>
              <Nav.Link onClick={()=>{history.push("/Project")}}>Project</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <Switch>
        <Route path="/project">
            <Project />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>


    </>
  );
}






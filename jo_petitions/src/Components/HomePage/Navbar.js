import React from 'react';
import { Navbar , Nav, Form,FormControl, Button } from 'react-bootstrap';

function NavBar(){
return(
    <Navbar bg="light" variant="light shadow-5 ">
    <Navbar.Brand href="#home" className="nav-head">JO Petitions</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Start a petition</Nav.Link>
      <Nav.Link href="#features">My petitions</Nav.Link>
      <Nav.Link href="#pricing">Browse</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary dim mh2">Login</Button>
      <Button variant="outline-primary dim">Rigester</Button>
    </Form>
  </Navbar>
);

}

export default NavBar ;
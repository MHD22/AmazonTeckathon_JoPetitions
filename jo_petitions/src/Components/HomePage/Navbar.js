import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./Footer.css";
function NavBar({ changeRoute }) {
  return (
    <Navbar bg="light" variant="light shadow-5 ">
      <Navbar.Brand
        onClick={() => {
          changeRoute("home");
        }}
        className="nav-head pointer dim"
        className="logo-color"
      >
        JoPetitions
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link
          onClick={() => {
            changeRoute("start");
          }}
        >
          {" "}
          Start a petition
        </Nav.Link>
        <Nav.Link
          onClick={() => {
            changeRoute("my petitions");
          }}
        >
          My petitions
        </Nav.Link>
        <Nav.Link
          onClick={() => {
            changeRoute("browse");
          }}
        >
          Browse
        </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button
          onClick={() => {
            changeRoute("sign in");
          }}
          variant="outline-success dim mh2 "
        >
          Login
        </Button>
        <Button
          onClick={() => {
            changeRoute("register");
          }}
          variant="outline-success dim"
        >
          Register
        </Button>
      </Form>
    </Navbar>
  );
}

export default NavBar;

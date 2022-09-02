import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <>
      <Navbar sticky="top" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt="JD Logo"
              src="./images/2.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav navbar={true} variant="pills" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

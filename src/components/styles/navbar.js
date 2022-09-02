import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../images/2.png";

export default function NavBar() {
  return (
    <>
      <Navbar sticky="top" className="navbar">
        <Navbar.Brand href="/">
          <img
            alt="JD Logo"
            src={logo}
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
      </Navbar>
    </>
  );
}

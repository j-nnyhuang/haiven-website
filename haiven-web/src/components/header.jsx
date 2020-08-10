import React, { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../assets/css/fonts.css";
import colors from "../config/colors";
import Haiven from "./haiven";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar
          justify="true"
          style={{ backgroundColor: colors.primary, padding: 20 }}
          expand="sm"
        >
          <Navbar.Brand href="#home">
            <Haiven />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ml-auto"
              style={{
                backgroundColor: colors.white,
                padding: 10,
                borderRadius: 5,
                justifyContent: "space-between",
              }}
            >
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Demo</Nav.Link>
              <Nav.Link href="#deets">Features</Nav.Link>
              <div style={{ backgroundColor: colors.tertiary }}>
                <Nav.Link href="#memes">My Account</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;

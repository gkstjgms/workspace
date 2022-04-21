import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Navigation.css";

import vscode from "./vscode.png";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vscodeImg: vscode,
    };
  }
  render() {
    const { vscodeImg } = this.state;

    return (
      <Navbar className="navbar">
        <Nav className="menu-list">
          <Navbar.Brand className="menu">
            <img className="vscode" src={vscodeImg} alt="VScode" />
          </Navbar.Brand>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#information">Information</Nav.Link>
          <Nav.Link href="#introduce">Introduce</Nav.Link>
          <Nav.Link href="#project">Project</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;

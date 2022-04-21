import React from "react";
import logo from "../../assets/gec.jpeg";
import { Container,Dropdown, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="60"
              height="61"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown">
              Profile
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">User Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Item href="/">LogOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;

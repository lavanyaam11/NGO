import React from "react";
import logo from "../../assets/gec.jpeg";
<<<<<<< HEAD
import { Container, Navbar, Dropdown } from "react-bootstrap";
=======
import { Container,Dropdown, Navbar } from "react-bootstrap";
>>>>>>> 98c62a19d2cf4a73c18096b76ec36f32621d933a

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

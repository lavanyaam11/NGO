import React from "react";
import logo from "../../assets/gec.jpeg";
import { Container } from "react-bootstrap";

function Navbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navbar;

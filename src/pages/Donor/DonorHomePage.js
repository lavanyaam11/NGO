import React from "react";
// import Header from "../../components/Header";
import Navbar from "./Navbar";
import logo from '../../assets/gec.jpeg'
import { Container } from 'react-bootstrap';


function DonorHomePage() {
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
      <h1>DonorHomePage</h1>
    </div>
  );
}
export default DonorHomePage;

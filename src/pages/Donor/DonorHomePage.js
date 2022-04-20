import React from "react";
import image from "../../assets/oneee.jpg";
import logo from "../../assets/gec.jpeg";
import { Card, Dropdown, Navbar, Container } from "react-bootstrap";

function DonorHomePage() {
  return (
    <div style={{backgroundImage: `url(${image}` }}>
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
      <br></br>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "20rem", height: "16rem" }}>
          <Card.Body>
            <Card.Title>Donate Funds</Card.Title>
            <Card.Text>
              You can donate your funds to your preferred NGO.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="#">DONATE</Card.Link>
          </Card.Footer>
        </Card>
        <Card style={{ width: "20rem", height: "16rem" }}>
          <Card.Body>
            <Card.Title>Approve/Reject</Card.Title>
            <Card.Text>Approve or Reject the request and NGOs.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="/approveReject">Click here</Card.Link>
          </Card.Footer>
        </Card>
      </div>
      <br></br>
      <div className="d-flex justify-content-around">
        <Card style={{ width: "20rem", height: "16rem" }}>
          <Card.Body>
            <Card.Title>NGOs</Card.Title>
            <Card.Text>List of available NGOs..</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="#">NGOs</Card.Link>
          </Card.Footer>
        </Card>
        <Card style={{ width: "20rem", height: "16rem" }}>
          <Card.Body>
            <Card.Title>Donation History</Card.Title>
            <Card.Text>List of all your transactions.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="#">HISTORY</Card.Link>
          </Card.Footer>
        </Card>
      </div>
      <br></br>
    </div>
  );
}
export default DonorHomePage;

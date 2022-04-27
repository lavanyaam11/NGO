import React from "react";
import { Card, Button, Nav } from "react-bootstrap";
import NavBar from "./NavBar";

export default function ApproveReject() {
  return (
    <>
      <NavBar></NavBar>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Request</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">NGOs</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Approve or Reject</Card.Title>
          <Card.Text>Request for demand or ngo verification.</Card.Text>
          <Button variant="success">Approve</Button>{" "}
          <Button variant="danger">Reject</Button>
        </Card.Body>
      </Card>
    </>
  );
}

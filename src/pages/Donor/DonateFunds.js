import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, Button, Form, Row, Col, Container } from "react-bootstrap";
import NavBar from "./NavBar";

function DonateFunds() {
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  return (
    <>
        <NavBar></NavBar>
        <br></br>
        <Container fluid="md">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="orgName">
            <Form.Label column sm="3">
              Name of the Organization
            </Form.Label>
            <Col sm="8">
              <Form.Select>
                <option selected disabled>
                  Available NGOs
                </option>
                <option value="1">NGO-1</option>
                <option value="2">NGO-2</option>
                <option value="3">NGO-3</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="orgAddress">
            <Form.Label column sm="3">
              Organization wallet address
            </Form.Label>
            <Col sm="8">
              <Form.Control type="password" placeholder="orgAddress" />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            Donate
          </Button>
        </Form>
        {/* <div className="App container">
        <DropdownButton
          alignRight
          title="Dropdown right"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
          <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
          <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
        </DropdownButton>
        <h4>You selected {value}</h4>
      </div> */}
      </Container>
    </>
  );
}

export default DonateFunds;

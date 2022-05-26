import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Container } from "react-bootstrap";
import NavBar from "./NavBar";

function DonateFunds() {
  return (
    <>
      <NavBar></NavBar>
      <br></br>
      <Container fluid="md">
        <h1 className="mb-3 fs-3 fw-normal text-center ">DONATE HERE</h1>
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
                <option value="1">Smile Foundation</option>
                <option value="2">Give India Foundation</option>
                <option value="3">Care India</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="orgName">
            <Form.Label column sm="3">
              Cause
            </Form.Label>
            <Col sm="8">
              <Form.Select>
                <option selected disabled>
                  Cause
                </option>
                <option value="1">Education</option>
                <option value="2">Covid-19</option>
                <option value="3">Girl Eduaction</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formBasicDescription"
          >
            <Form.Label column sm="3">
              Cause Description
            </Form.Label>
            <Col sm="8">
              <Form.Control as="textarea" rows={3} placeholder="Description" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="orgAddress">
            <Form.Label column sm="3">
              Organization wallet address
            </Form.Label>
            <Col sm="8">
              <Form.Control type="orgAddress" placeholder="orgAddress" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="amountRequired">
            <Form.Label column sm="3">
              Amount Required
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="amountRequired"
                placeholder="Amount required"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="amountCollected">
            <Form.Label column sm="3">
              Amount Collected
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="amountCollected"
                placeholder="Amount Collected"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="donationAmount">
            <Form.Label column sm="3">
              Donation Amount
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="donationAmount"
                placeholder="Donation Amount"
              />
            </Col>
          </Form.Group>

          <br></br>
          <div class="d-grid col-2 mx-auto">
            <button class="btn btn-success" type="button">
              Donate
            </button>
          </div>
        </Form>
        <br></br>
      </Container>
    </>
  );
}

export default DonateFunds;

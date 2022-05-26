import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'

export default function CreateRequest() {
    const navigate = useNavigate()
    return (
        <div>
            <NavBar />
            <br />
            <Container fluid="md">
                <h1 className="mb-3 fs-3 fw-normal text-center ">Create New Request</h1>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formBasicOrg">
                        <Form.Label column sm="3">Organization Name</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Enter the organization name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formBasicAddress">
                        <Form.Label column sm="3">Organization Wallet Address</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Password" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formBasicCause">
                        <Form.Label column sm="3">Cause Name</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Cause Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formBasicDescription">
                        <Form.Label column sm="3">Cause Description</Form.Label>
                        <Col sm="8">
                            <Form.Control as="textarea" rows={3} placeholder="Description" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formBasicAmount">
                        <Form.Label column sm="3">Amount Required</Form.Label>
                        <Col sm="8">
                            <Form.Control type="number" placeholder="Amount" />
                        </Col>
                    </Form.Group>
                    <br/>
                    <br/>
                    <div className='d-flex justify-content-lg-between'>
                        <Button variant="success" type="success">
                            Create Request
                        </Button>
                        
                        <Button variant="danger" type="danger" onClick={() => { navigate('/ngo') }}>
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Container>
            <br />
        </div>
    )
}

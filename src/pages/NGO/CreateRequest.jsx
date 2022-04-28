import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'
import { Form, Button, Container } from 'react-bootstrap'

export default function CreateRequest() {
    const navigate = useNavigate()
    return (
        <div>
            <NavBar />
            <br/>
            <Container>
            <h1 className="mb-3 fs-3 fw-normal text-center ">Create New Request</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicOrg">
                        <Form.Label>Organization Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the organization name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Organization Wallet Address</Form.Label>
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCause">
                        <Form.Label>Cause Name</Form.Label>
                        <Form.Control type="text" placeholder="Cause Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Cause Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAmount">
                        <Form.Label>Amount Required</Form.Label>
                        <Form.Control type="number" placeholder="Amount" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create Request
                    </Button>
                    <Button variant="danger" type="danger" onClick={()=>{navigate('/ngo')}}>
                        Cancel
                    </Button>
                </Form>
            </Container>
            <br />
        </div>
    )
}

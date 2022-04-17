import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';

export default function NGOSignUp() {
    return (
        <Container>
            <h1 className="mb-3 fs-3 fw-normal text-center ">Register As NGO</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicWallet">
                    <Form.Label>Organiation Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Organization" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicOwner">
                    <Form.Label>Owner Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Owner Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId='formBasicId'>
                    <Form.Label>Addhaar Number</Form.Label>
                    <Form.Control type="text" placeholder='Enter Addhaar Number'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId='formBasicCerificate'>
                    <Form.Label>Certificate Number</Form.Label>
                    <Form.Control type="text" placeholder='Enter Certificate Number'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicWallet">
                    <Form.Label>Wallet address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your wallet address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </Container>
    )
}

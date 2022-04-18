import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Header from './Header';

export default function NGOSignUp() {
    return (
        <>
        <Header/>
        <Container>
            <h1 className="mb-3 fs-3 fw-normal text-center ">Register As Donor</h1>
            <Form>
                
                <Form.Group className="mb-3" controlId="formBasicDonor">
                    <Form.Label>Donor Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Donor Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Donor Email Id</Form.Label>
                    <Form.Control type="email" placeholder="Enter Donor email id" />
                </Form.Group>

                <Form.Group className="mb-3" controlId='formBasicId'>
                    <Form.Label>Addhaar Number</Form.Label>
                    <Form.Control type="text" placeholder='Enter Addhaar Number'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicWallet">
                    <Form.Label>Wallet address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your wallet address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </Container>
        <br />
        </>
    )
}

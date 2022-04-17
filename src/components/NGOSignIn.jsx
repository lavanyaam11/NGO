import React from 'react'
import { Form, Button, Modal } from 'react-bootstrap'

export default function NGOSignIn(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Signin as NGO
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicWallet">
                        <Form.Label>Wallet address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your wallet address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Sign In
                </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                Don't have an account?
                <Button variant="link">Sign Up</Button>
            </Modal.Footer>
        </Modal>
    )
}

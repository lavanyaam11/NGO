import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Button, Modal } from 'react-bootstrap'

export default function DonorSignIn(props) {
    const navigate = useNavigate();
    const onClickHandler = () =>{
        navigate('/donorRegistration');
        props.onHide();
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Signin as Donor
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
                <Button variant="link" onClick={onClickHandler}>Sign Up</Button>
            </Modal.Footer>
        </Modal>
    )
}

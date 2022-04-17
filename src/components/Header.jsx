import React from 'react'
import { Navbar, Container,Button } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    GiveEthCare
                </Navbar.Brand>
                <Button variant="primary" size="sm">Login</Button>
            </Container>
        </Navbar>
    )
}

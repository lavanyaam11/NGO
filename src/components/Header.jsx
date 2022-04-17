import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';
import logo from '../assets/gec.jpeg'

export default function Header(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Button variant="primary" size="sm" onClick={() => props.setModalShow(true)}>Login</Button>
            </Container>
        </Navbar>
    )
}

import React from 'react';
import logo from "../../assets/gec.jpeg";
import { Navbar, Container, NavDropdown, Nav, Form ,FormControl,Button } from 'react-bootstrap';

export default function NavBar() {
    return (
        <div><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="61"
                        className="d-inline-block align-top"
                    />{" "}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Create Request</Nav.Link>
                        <Nav.Link href="#pricing">History</Nav.Link>
                    </Nav>
                    <Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="status of the request"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                        <NavDropdown title="Profie" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">NGO Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">LogOut</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar></div>
    )
}

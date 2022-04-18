import React from 'react'
import { Navbar, Container, Dropdown, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import logo from '../assets/gec.jpeg'

export default function Header(props) {
    let history = useLocation();
    let { pathname } = history;
    console.log(history);
    console.log(pathname);
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
                {pathname === '/' &&
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Login As
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={() => props.setModalShow(true)}>NGO</Dropdown.Item>
                        <Dropdown.Item href="#">Donor</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>}
                {pathname !=='/' && <Button variant='danger'>Log Out</Button>}
                
            </Container>
        </Navbar>
    )
}

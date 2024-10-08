import React from 'react';
import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

const CustomNav = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className="mx-auto">
                    <Navbar.Brand as={Link} to="/">Biblioteca Online</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/search">Buscar</Nav.Link>
                            <Nav.Link as={Link} to="/result">Carrito</Nav.Link>
                            <Nav.Link as={Link} to="/not-found">Página No Encontrada</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default CustomNav;
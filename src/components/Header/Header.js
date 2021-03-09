import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () =>
{
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/">Movie Bank</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item className="mx-2"><Link to="/home">Home</Link></Nav.Item>
                        <Nav.Item className="mx-2"><Link to="/upcoming">Upcoming</Link></Nav.Item>
                        <Nav.Item className="mx-2"><Link to="/top-rated">Top-Rated</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
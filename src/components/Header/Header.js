import React from 'react';
import { Container, Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

const Header = () =>
{
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Movie Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/upcoming">Upcoming</Nav.Link>
                        <Nav.Link href="/top-rated">Top-Rated</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
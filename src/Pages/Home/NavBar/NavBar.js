import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import'./NavBar.css'
const NavBar = () => {
    return (
        <>
       
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
        <Container >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='child-header'>
            <Nav className="">
            <Nav.Link as={CustomLink} to='/features'>Home</Nav.Link>
            <Nav.Link as={CustomLink} to='/pricing'>Features</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav className=''>
            <Nav.Link href="#deets">More</Nav.Link>
            <Nav.Link eventKey={2}as={CustomLink} to='/login'>
                Login
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
</Navbar>
       </>
    );
};

export default NavBar;
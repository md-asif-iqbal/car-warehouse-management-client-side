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
            <Nav.Link as={CustomLink} to='/home'>Home</Nav.Link>
            <Nav.Link as={CustomLink} to='/pricing'>Features</Nav.Link>
            <Nav.Link as={CustomLink} to='/inventory'>Inventory</Nav.Link>
            <Nav.Link as={CustomLink} to='/blogs'>Blogs</Nav.Link>
            
            </Nav>
            <Nav className=''>
            <Nav.Link as={CustomLink} to='/deleteItems'>Manage Items</Nav.Link>
            <Nav.Link as={CustomLink} to='/addItems'>Add Items</Nav.Link>
            <Nav.Link as={CustomLink} to='/myItems'>My Items</Nav.Link>
            <Nav.Link as={CustomLink} to='/login'>
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
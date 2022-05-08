import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';
import'./NavBar.css'
const NavBar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <>
       
        <Navbar collapseOnSelect className='navBar' sticky='top' expand="lg" bg="dark" variant="dark">
            <Container >
                <Navbar.Brand as={Link} to='/home'>TORETTO'S Collections</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='child-header'>
                    <Nav className="">
                    <Nav.Link as={CustomLink} to='/home'>Home</Nav.Link>
                    <Nav.Link as={CustomLink} to='/inventory'>Inventory</Nav.Link>
                    <Nav.Link as={CustomLink} to='/blogs'>Blogs</Nav.Link>
                    
                    
                    </Nav>
                    <Nav className=''>
                    {
                        user ? 
                        <Nav.Link as={CustomLink} to='/deleteItems'>Manage Items</Nav.Link>
                        
                    :''
                    }
                    {
                        user ? 
                        <Nav.Link as={CustomLink} to='/addItems'>Add Items</Nav.Link>
                        
                    :''
                    }
                    {
                        user ? 
                        <Nav.Link as={CustomLink} to='/myItems'>My Items</Nav.Link>
                        
                    :''
                    }
                    {
                        user? <Nav.Link onClick={handleSignOut} as={CustomLink} to='/login'>
                        Logout
                    </Nav.Link>
                    :
                    <Nav.Link as={CustomLink} to='/login'>
                        Login
                    </Nav.Link>
                    }
                    </Nav>
                </Navbar.Collapse>
        </Container>
</Navbar>
       </>
    );
};

export default NavBar;
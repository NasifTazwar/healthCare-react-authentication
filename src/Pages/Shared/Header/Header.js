import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user , logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><br /> MediCare <br /><br /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to ="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to ="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to ="/faq">FAQ</Nav.Link>
                            <Nav.Link as={HashLink} to ="/blogs">Blogs</Nav.Link>
                            { user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to ="/login">Login</Nav.Link>
                            }
                            <Navbar.Text>
                                Signed in as: <a href="#login">
                                    {user?.displayName}
                                </a>
                            </Navbar.Text>
                            {/*  */}
                            {/*  */}
                        </Nav>
                    </Navbar.Collapse>
                    
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
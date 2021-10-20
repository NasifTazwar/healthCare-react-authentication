import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import { GiHospitalCross } from "react-icons/gi";
import './Header.css';

const Header = () => {
    const {user , logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <div className="logo"><GiHospitalCross></GiHospitalCross> MediCare</div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to ="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to ="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to ="/faq">FAQ</Nav.Link>
                            <Nav.Link as={HashLink} to ="/blogs">Blogs</Nav.Link>
                            { user?.email ?
                                <Button onClick={logOut} variant="light" className="mx-1">Logout</Button> :
                                <Nav.Link as={Link} to ="/login">Login</Nav.Link>
                            }
                            {
                                user?.email ?
                                <Navbar.Text className="mx-2">
                                Signed in as: <a href="#login">
                                    {user?.displayName || user?.email}
                                    </a>
                                </Navbar.Text> :
                                <p></p>
                                
                            }
                            {/* <Navbar.Text>
                                Signed in as: <a href="#login">
                                    {user?.displayName || user?.email}
                                </a>
                            </Navbar.Text> */}
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
import React, { useState } from 'react';
import { Collapse, Navbar, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import styled from 'styled-components';
import { mdiMenu, mdiClose } from '@mdi/js';
import Icon from '@mdi/react';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <Navbar className="shadow px-lg-5 py-2" color="white" expand="lg" fixed="top" light>
                <Link to="/" className="d-flex align-items-center no-decoration">
                    <img src={logo} alt="" width="45px" /> <span className="font-weight-bold mb-0 pl-1" style={{fontSize: '1.1rem'}}>LINGUALYTICS</span>
                </Link>
                <Button color="transparent" className="px-0 d-block d-lg-none" onClick={toggleNavbar}>
                    <Icon path={collapsed ? mdiMenu : mdiClose} color="#1696e7" size={1.5} />
                </Button>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="ml-auto my-3 my-lg-0" navbar>
                        <NavItem className="d-flex align-items-center pr-2 mr-3 py-1">
                            <CustomNavLink to="/#about" className="text-primary">About</CustomNavLink>
                        </NavItem>
                        <NavItem className="d-flex align-items-center pr-2 mr-3 py-1">
                            <CustomNavLink to="/#features" className="text-primary">Features</CustomNavLink>
                        </NavItem>
                        <NavItem className="d-flex align-items-center pr-2 mr-3 py-1">
                            <CustomNavLink to="/#team" className="text-primary">Team</CustomNavLink>
                        </NavItem>
                        <NavItem className="d-flex align-items-center pr-2 mr-2 py-1">
                            <CustomLink href="https://lingualytics.github.io/py-lingualytics/" target="_blank" className="text-primary">Docs</CustomLink>
                        </NavItem>
                        <NavItem className="d-flex align-items-center pr-2 mr-2 py-1">
                            <CustomNavLink to="/#contact" className="text-primary">Contact</CustomNavLink>
                        </NavItem>
                        <NavItem className="mt-2 mt-lg-0 ml-lg-2">
                            <Link to="/demo">
                                <Button className="rounded-0 px-4" color="primary">
                                    Demo
                                </Button>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

const CustomNavLink = styled(Link)`
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
`

const CustomLink = styled.a`
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
`

export default NavBar;
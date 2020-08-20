import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div className="pt-4 bg-dark">
            <Container fluid>
                <Row className="text-white">
                    <Col sm="12" lg={{ offset: 1, size: "auto" }}>
                        <Link className="ml-lg-5" to="/">
                            <img width="100px" src={logo} alt="" />
                        </Link>
                    </Col>
                    <Col className="mt-2" sm="12" lg={{ offset: 1, size: 3 }}>
                        <h6 className="text-info mb-1">Contact Info</h6>
                        <ListGroup className="no-list font-weight-light">
                            <li>Address: Kalyani Solvex, Sudarshanpur,<br /> Raiganj, Uttar Dinajpur, West Bengal - 733134</li>
                            <li>Phone: +91 9733008834</li>
                            <li>Email: contact@kalyanisamriddhi.com</li>
                        </ListGroup>
                    </Col>
                    <Col className="mt-3 mt-lg-2" sm="12" lg={{ offset: 1, size: 3 }}>
                        <h6 className="text-info mb-1">Important Links</h6>
                        <ListGroup className="no-list">
                            <li><FooterLink to="/#about"> About</FooterLink></li>
                            <li><FooterLink to="/#features"> Features</FooterLink></li>
                            <li><FooterLink to="/#contact">Contact</FooterLink></li>
                            <li><FooterLink to="/demo">Demo</FooterLink></li>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="pb-3 text-white mt-3">
                    <Col sm="12" lg={{ offset: 1, size: "auto" }}>
                        <p className="ml-lg-5 mb-0 small font-weight-light">Copyright © 2020 All rights reserved | Made by Avi Garg</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const FooterLink = styled(Link)`
    color: white;
    font-weight: lighter;
    &:hover {
        color: white;
        text-decoration: none;    
    }
`

export default Footer;
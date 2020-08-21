import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import styled from 'styled-components';
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiGithub, mdiLinkedin, mdiBlogger } from '@mdi/js';
import Icon from '@mdi/react';

const contactArray = [
    {
      icon: mdiFacebook,
      title: "Facebook",
      text: "https://www.facebook.com/lingualytics"
    }, {
      icon: mdiTwitter,
      title: "Twitter",
      text: "https://twitter.com/lingualytics"
    }, {
      icon: mdiInstagram,
      title: "Instagram",
      text: "https://www.instagram.com/lingualytics/"
    }, {
      icon: mdiGithub,
      title: "Github",
      text: "https://github.com/lingualytics/"
    }, {
      icon: mdiLinkedin,
      title: "LinkedIn",
      text: "https://www.linkedin.com/company/lingualytics/about/"
    }, {
      icon: mdiBlogger,
      title: "Medium",
      text: "https://medium.com/lingualytics"
    }
  ]

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
                        <h6 className="text-info mb-1">Important Links</h6>
                        <ListGroup className="no-list">
                            <li><FooterLink to="/#about"> About</FooterLink></li>
                            <li><FooterLink to="/#features"> Features</FooterLink></li>
                            <li><FooterLink to="/#team"> Team</FooterLink></li>
                            <li><FooterLink to="/#contact">Contact</FooterLink></li>
                            <li><FooterLink to="/demo">Demo</FooterLink></li>
                        </ListGroup>
                    </Col>
                    <Col className="mt-3 mt-lg-2" sm="12" lg={{ offset: 1, size: 3 }}>
                        <h6 className="text-info mb-1">Social Media</h6>
                        <ListGroup className="no-list d-flex flex-row font-weight-light">
                            {contactArray.map((data, i) => {
                                return (
                                    <li key={i} className="mr-1"><a href={data.text} target="_blank" rel="noopener noreferrer" className="text-primary h5 font-weight-light pr-1"><Icon path={data.icon} color="white" size={1} /></a></li>
                                );
                            })}
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
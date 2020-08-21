import React, { useEffect, useState, useRef } from "react";
import Icon from "@mdi/react";
import { Button, Container, Col, Row } from 'reactstrap'
import { mdiMagnify, mdiLanguagePython, mdiBrain, mdiFacebook, mdiTwitter, mdiInstagram, mdiGithub, mdiLinkedin, mdiBlogger } from '@mdi/js';
import AboutCard from "../Components/AboutCard";
import styled from "styled-components";
import heroImg from '../img/hero-img.png';
import aboutImg from '../img/yt-placeholder.jpg';
import { Link } from "react-router-dom";
import aviImg from '../img/avi.jpg';
import rohanImg from '../img/rohan.jpg';
import royalImg from '../img/royal.jpg';


const teamArray = [
  {
    img: aviImg,
    name: "Avi Garg"
  }, {
    img: rohanImg,
    name: "Rohan Rajpal"
  }, {
    img: royalImg,
    name: "Royal Tomar"
  }, 
]

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

const aboutArray = [
  {
    icon: mdiMagnify,
    title: "Analysis Web App",
    text: "Checkout our web app which analyses the sentiment of anything you type!",
    btn: 
    <Link to="/demo">
      <Button className="rounded-0 px-4" color="primary" size="lg">
        Know More!
      </Button>
    </Link>
  },
  {
    icon: mdiLanguagePython,
    title: "Py-Lingualytics",
    text: "A python package which has all the tools to work with code-switched data!",
    btn: <a href="https://github.com/lingualytics/py-lingualytics" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-0 px-4" color="primary" size="lg">
              Know More!
            </Button>
          </a>
  },
  {
    icon: mdiBrain,
    title: "Huggingface Models",
    text: "We have uploaded our models for free use on huggingface, check them out!",
    btn: <a href="https://huggingface.co/rohanrajpal" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-0 px-4" color="primary" size="lg">
              Know More!
            </Button>
          </a>
  }
]

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

const Home = () => {

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const teamRef = useRef(null)
  const featuresRef = useRef(null)
  const contactRef = useRef(null) 

  useEffect(() => {
    let tab = window.location.hash.split("#");
    if(tab.length > 2) {
      tab = tab.pop();
      switch(tab) {
        case "about": 
          scrollToRef(aboutRef);
          break;
        case "features": 
          scrollToRef(featuresRef);
          break;
        case "contact": 
          scrollToRef(contactRef);
          break;
        case "team": 
          scrollToRef(teamRef);
          break;
        default: 
        scrollToRef(homeRef);
      }
    } else {
      scrollToRef(homeRef);
    }
  });
  
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const submitMessage = (event) => {
    event.preventDefault();
    let name = state.name;
    let email = state.email;
    let message = state.message;
    var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc6KrF4wn8Mtbfq1WCmwVY-bZ2ccdYcYlQzIBiQ1fPvUeEPFA/formResponse?usp=pp_url&entry.1165312720=" + name + "&entry.1185266531=" + email + "&entry.870815418=message" + message;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", formUrl);
    xmlHttp.send(null);
    setState({
      name: "",
      email: "",
      message: "",
    });
    setIsSent(true);
  }

  const handleChange = (event) => {
    setIsSent(false);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value
    });
  }

  return (
    <>
      <LandingHome ref={homeRef}>
        <Container fluid className="h-100 d-flex align-items-center">
          <Row className="w-100">
            <Col sm="12" lg={{ offset: 1, size: 8 }}>
              <h1 className="text-info display-5 font-weight-bold mb-0">Hi there!</h1>
              <h1 className="text-primary font-weight-bold mb-2 text-uppercase" style={{fontSize: '3rem'}}>Lingualytics</h1>
              <p className="mb-4 text-secondary">Democratizing NLP by understanding a mix of languages</p>
              <Link to="/demo">
                <Button className="rounded-0 px-4" color="primary" size="lg">
                  Live Demo!
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </LandingHome>
      <div style={{ background: "rgba(232, 245, 253, 0.32)", padding: "90px 0" }} ref={aboutRef}>
        <Container fluid>
          <Row>
            <Col className="d-flex justify-content-center flex-column" sm="12" lg={{ offset: 1, size: 5 }}>
              <h5 className="text-info font-weight-bold mb-2">About Us</h5>
              <h1 className="text-primary font-weight-bold mb-2">We Are On A Mission To Democratize NLP</h1>
              <p className="text-secondary mb-2 pr-lg-4">Did you know that Indians/Spaniards usually don't talk in just one language? They usually use two or more languages when texting or talking, which is usually English mixed with their native language. This mixing is called code-mixing.</p>
              <p className="text-secondary mb-4 pr-lg-4">All of the NLP analytics companies perform well on only one language, <b>we are developing models and tools to understand these mix of languages.</b> Help us understand how the world types by filling this form below.</p>
              <a href="https://rohanrajpal.typeform.com/to/ltOXIigW" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-0 px-4" color="primary" size="lg">
                  Contribute!
                </Button>
              </a>
            </Col>
            <Col className="text-center mt-4 mt-lg-0 d-flex align-items-center" sm="12" lg="5">
              <AboutImg src={aboutImg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        <div style={{ padding: "90px 0" }} ref={featuresRef}>
          <Container fluid>
            <Row>
              <Col className="text-center" sm="12" md={{ offset: 2, size: 8 }} lg={{ offset: 3, size: 6 }}>
                <h5 className="text-info font-weight-bold mb-1">Our Features</h5>
                <h1 className="text-primary font-weight-bold mb-4">Our 3 Primary Features</h1>
              </Col>
          </Row>
            <Row className="justify-content-center">
              {aboutArray.map((data, i) => {
                return <AboutCard title={data.title} icon={data.icon} text={data.text} isLight={i % 2 === 0} key={i} moreBtn={data.btn} />;
              })}
            </Row>
          </Container>
        </div>
      </Container>
      <div style={{ background: "rgba(232, 245, 253, 0.32)", padding: "90px 0" }} ref={teamRef}>
        <Container fluid>
          <Row>
              <Col className="text-center" sm="12" md={{ offset: 2, size: 8 }} lg={{ offset: 3, size: 6 }}>
                <h5 className="text-info font-weight-bold mb-1">Our Team</h5>
                <h1 className="text-primary font-weight-bold mb-4">A Team On Mission</h1>
              </Col>
          </Row>
          <Row className="justify-content-start mt-3">
            <Col sm="0" lg={{offset: 1}} ></Col>
            {teamArray.map((data, i) => {
              return (
                <Col key={i} sm="6" lg={{ offset: 1, size: 2 }} className="text-center">
                  <TeamImg src={data.img} alt="" className="rounded-circle img-fluid shadow" />
                  <h5 className="text-primary mt-3 mb-5 mb-lg-0">{data.name}</h5>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Container fluid>
        <div style={{ padding: "90px 0" }} ref={contactRef}>
        <Row>
          <Col className="text-center" sm="12">
            <h1 className="text-primary font-weight-bold mb-4">Contact Us</h1>
          </Col>
        </Row>
          <Row className="mt-5">
              <Col sm="12" lg={{ offset: 1, size: 6 }}>
                <h3 className="font-weight-bold text-info">Get in touch</h3>
                <form onSubmit={submitMessage}>
                  <div className="form-group">
                    <input type="text" name="name" value={state.name} onChange={handleChange} className="form-control" id="nameContact" placeholder="Full Name" aria-describedby="nameHelp" required />
                    <label className="floating-label">Full Name</label>
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" value={state.email} onChange={handleChange} className="form-control" id="emailContact" placeholder="Email" aria-describedby="emailHelp" required />
                    <label className="floating-label">Email</label>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" value={state.message} onChange={handleChange} id="messageContact" placeholder="Message" rows="10" maxLength="500" required ></textarea>
                    <label className="floating-label">Message</label>
                  </div>
                  <div className="d-flex">
                    <Button outline type="submit" color="primary" size="lg" className="text-uppercase rounded-0 px-4 py-1">Send</Button>
                    <div className={`mb-0 ml-auto d-flex align-items-center small border-0 py-0 text-uppercase alert alert-success hidden ${isSent ? "" : "hide"}`}>Success!</div>
                  </div>
                </form>
              </Col>
              <Col sm="12" lg={{ offset: 1, size: 4 }} className="mt-5 mt-lg-0">
              <h3 className="font-weight-bold text-info">Social Media</h3>
                {contactArray.map((data, i) => {
                  return (
                    <div className="media" key={i}>
                      <span><Icon path={data.icon} color="#464d65" size={1} /></span>
                      <div className="media-body ml-2 mb-3">
                        <a href={data.text} target="_blank" rel="noopener noreferrer" className="text-primary h5 font-weight-light">{data.title}</a>
                      </div>
                    </div>
                  );
                })}
              </Col>
            </Row>
            
          </div>
      </Container>
    </>
  );
}

const LandingHome = styled.div`
  height: 100vh;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`
const TeamImg = styled.img`
width: 100%;
@media (max-width: 991.98px) { 
  width: 75%;
}
`

const AboutImg = styled.img`
@media (max-width: 991.98px) { 
  width: 100%;
}
`

export default Home;

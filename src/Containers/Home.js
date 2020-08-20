import React, { useEffect, useState, useRef } from "react";
import Icon from "@mdi/react";
import { Button, Container, Col, Row } from 'reactstrap'
import { mdiBookOpenPageVariant, mdiFoodApple, mdiHospitalBox, mdiMapMarker, mdiPhone, mdiEmail } from '@mdi/js';
import AboutCard from "../Components/AboutCard";
import styled from "styled-components";
import heroImg from '../img/hero-img.png';
import aboutImg from '../img/yt-placeholder.jpg';
import { Link } from "react-router-dom";


const contactArray = [
  {
    icon: mdiMapMarker,
    title: "Kalyani Solvex",
    text: "Sudarshanpur, Raiganj, Uttar Dinajpur, West Bengal - 733134"
  }, {
    icon: mdiPhone,
    title: "+91 9733008834",
    text: "Mon to Fri 10am to 6pm"
  }, {
    icon: mdiEmail,
    title: "contact@kalyanisamriddhi.com",
    text: "Send us an email anytime!"
  }
]

const aboutArray = [
  {
    icon: mdiBookOpenPageVariant,
    title: "Educational Scholarship",
    text: "To ensure that the financially burdened are not deprived of an educational qualification, we provide scholarships to assist them."
  },
  {
    icon: mdiHospitalBox,
    title: "Medical Facilities",
    text: "By providing monetary funds to patients, we want every human to have access to all medical facilities required for their treatment."
  },
  {
    icon: mdiFoodApple,
    title: "Clean Water & Food",
    text: "We serve to ensure basic amenities like clean food and water are available to all community members."
  }
]

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

const Home = () => {

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
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
              <h1 className="text-info display-5 font-weight-bold mb-0">Heading 1</h1>
              <h1 className="text-primary display-4 font-weight-bold mb-2">Heading 2is asf</h1>
              <p className="mb-4 text-secondary">Helper line text explain msg</p>
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
              <h1 className="text-primary font-weight-bold mb-2">We Are On A Mission To Do Something</h1>
              <p className="text-secondary mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p className="text-secondary mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
              <Link to="/#features">
                <Button className="rounded-0 px-4" color="primary" size="lg">
                  Know More!
                </Button>
              </Link>
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
                <h1 className="text-primary font-weight-bold mb-4">Our 3 Primary Features XYZ</h1>
              </Col>
          </Row>
            <Row className="justify-content-center">
              {aboutArray.map((data, i) => {
                return <AboutCard title={data.title} icon={data.icon} text={data.text} isLight={i % 2 === 0} key={i} />;
              })}
            </Row>
          </Container>
        </div>
      </Container>
      <Container fluid>
        <div style={{ padding: "0 0 90px 0" }} ref={contactRef}>
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
                {contactArray.map((data, i) => {
                  return (
                    <div className="media" key={i}>
                      <span><Icon path={data.icon} color="#464d65" size={1} /></span>
                      <div className="media-body ml-2">
                        <h5 className="mb-0 text-primary font-weight-light">{data.title}</h5>
                        <p className="mb-4 text-secondary pr-5">{data.text}</p>
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

const AboutImg = styled.img`
  @media (max-width: 991.98px) { 
    width: 100%;
  }
`

export default Home;

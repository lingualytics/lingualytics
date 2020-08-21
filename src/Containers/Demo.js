import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Container, Col, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import heroImg from '../img/hero-img.png';
import styled from "styled-components";

const Demo = () => {

  useEffect(() => {
    window.location.href = "https://huggingface.co/rohanrajpal/bert-base-multilingual-codemixed-cased-sentiment";
  });

  return (
    <div className="d-flex align-items-center justify-content-center" style={{minHeight: '70vh'}}>
      Loading...
    </div>
  );
}

const Demo_BAK = () => {

  const [text, setText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      data: text
    };

    axios.post(`https://api-inference.huggingface.co/models/rohanrajpal/bert-base-multilingual-codemixed-cased-sentiment`, { data }, { headers: { 'Content-Type': 'application/json'} })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <div style={{ padding: "0 0 70px 0" }}>
      <LandingHome>
        <Container fluid className="h-100 d-flex align-items-center">
          <Row className="w-100">
            <Col sm="12" lg={{ offset: 1, size: 8 }}>
              <h1 className="text-info display-5 font-weight-bold mb-0">Hi there!</h1>
              <h1 className="text-primary font-weight-bold mb-2 text-uppercase" style={{fontSize: '3rem'}}>Lingualytics</h1>
              <p className="mb-4 text-secondary">Democratizing NLP by understanding a mix of languages</p>
              <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
              <Link to="/demo">
                <Button className="rounded-0 px-4" color="primary" size="lg">
                  Live Demo!
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </LandingHome>
    </div>
  );
}


const LandingHome = styled.div`
  height: 100vh;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

export default Demo;

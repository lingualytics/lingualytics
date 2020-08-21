import React, { useState } from "react";
import axios from 'axios';
import { Button, Container, Col, Row } from 'reactstrap'
import heroImg from '../img/hero-img.png';
import styled from "styled-components";

const Demo = () => {

  const [text, setText] = useState('');
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = '"'+ text +'"';
    axios.post(`https://api-inference.huggingface.co/models/rohanrajpal/bert-base-multilingual-codemixed-cased-sentiment`, data, { headers: { 'Content-Type': 'text/plain'} })
      .then(res => {
        setResult(res.data[0]);
      })
  }

  return (
    <div>
      <LandingHome>
        <Container fluid className="h-100 d-flex align-items-center">
          <Row className="w-100">
            <Col sm="12" lg={{ offset: 1, size: 5 }}>
              <h1 className="text-info display-5 font-weight-bold mb-0">Try Me!</h1>
              <h1 className="text-primary font-weight-bold mb-2 text-uppercase" style={{fontSize: '3rem'}}>Lingualytics</h1>
              <p className="mb-4 text-secondary">Enter your text to be analyzed below and see the magic</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="name" value={text} onChange={handleChange} className="form-control" placeholder="Text" required />
                    <label className="floating-label">Text</label>
                </div>
                <Button className="rounded-0 px-4" color="primary" size="lg">
                  Get Results!
                </Button>
              </form>
              {result.map((data, i) => {
                return(
                  <div className="mt-3" key={i}>
                    {data.label}: {data.score}
                  </div>
                );
              })}
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

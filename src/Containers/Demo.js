import React, { useState } from "react";
import axios from 'axios';
import { Button, Container, Col, Row } from 'reactstrap'
import heroImg from '../img/hero-img-white.png';
import smileImg from '../img/smile.svg';
import sadImg from '../img/sad.svg';
import neutralImg from '../img/neutral.svg';
import styled from "styled-components";

const Demo = () => {

  const LABEL_IMAGE_MAP = {
    LABEL_0: sadImg,
    LABEL_1: neutralImg,
    LABEL_2: smileImg
  }
  const LABEL_TEXT_MAP = {
    LABEL_0: "Negative",
    LABEL_1: "Neutral",
    LABEL_2: "Positive"
  }
  const [text, setText] = useState('');
  const [imgLoad, setImgLoad] = useState(neutralImg)
  const [textLoad, setTextLoad] = useState('Neutral')
  const [scoreLoad, setScoreLoad] = useState(0)

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = '"'+ text +'"';
    axios.post(`https://api-inference.huggingface.co/models/rohanrajpal/bert-base-multilingual-codemixed-cased-sentiment`, data, { headers: { 'Content-Type': 'text/plain'} })
      .then(res => {
        let maxScore = -1;
        let maxLabel = "";
        res.data[0].forEach(data => {
          if(data.score > maxScore) {
            maxScore = data.score;
            maxLabel = data.label;
          }
        });
        setScoreLoad((maxScore * 100).toFixed(2));
        setImgLoad(LABEL_IMAGE_MAP[maxLabel])
        setTextLoad(LABEL_TEXT_MAP[maxLabel])
      })
  }

  return (
    <div>
      <LandingHome className=" d-flex align-items-center">
        <Container fluid>
          <Row noGutters className="w-100">
            <Col sm="12" lg={{ offset: 1, size: 5 }} className="order-2 order-lg-1 d-flex flex-column mb-5 mb-lg-0 justify-content-center">
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
            </Col>
            <Col sm="12" lg={{ offset: 1, size: 4 }} className="text-center order-1 mb-4 mt-5 my-lg-0 order-lg-2">
              <img src={imgLoad} alt="" className="img-fluid w-75" />
              <p className="mb-0 pt-3 text-primary font-weight-bold h5">{textLoad} Sentiment</p>
            <p className="mb-0 text-dark font-weight-light">Confidence Score: {scoreLoad}%</p>
            </Col>
          </Row>
        </Container>
      </LandingHome>
    </div>
  );
}


const LandingHome = styled.div`
  min-height: calc(100vh - 200px);
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`

export default Demo;

import React from "react";
import Icon from "@mdi/react";
import { Col, Card, CardHeader } from "reactstrap";
import styled from "styled-components";

const AboutCard = ({ icon, title, text, isLight }) => {

  return (
    <Col className="my-4" sm="12" lg="3" style={{ minHeight: "400px" }}>
      <CustomCard className={`border-0 h-100 d-flex align-items-center justify-content-center ${isLight ? "bg-white" : "bg-dark"}`}>
        <CardHeader className={`border-0 rounded-circle p-4 ${isLight ? "bg-info" : "bg-white"}`}>
          <Icon path={icon} size={1.7} color={isLight ? "white" : "#52c8fa"} />
        </CardHeader>
        <div className="px-4 pt-3 text-center">
          <h4 className={`${isLight ? "text-dark" : "text-white"} font-weight-bold mb-3`}>
            {title}
          </h4>
          <p className={`mb-0 ${isLight ? "text-secondary" : "text-white"}`}>
            {text}
          </p>
        </div>
      </CustomCard>
    </Col>
  );
}

const CustomCard = styled(Card)`
cursor: pointer;
box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35) !important;
  }
`;

export default AboutCard;
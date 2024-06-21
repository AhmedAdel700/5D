import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./skills.css";

import skills from "../../assets/Skills.png";
import PieChart from "./PieChart";
import data from "./chartData";
import dots3 from "../../assets/dots3.png";
import dots4 from "../../assets/dots4.png";
import dots5 from "../../assets/dots5.png";
import ellipse3 from "../../assets/Ellipse 37.png";
import ellipse4 from "../../assets/Ellipse 36.png";

export default function Skills() {
  return (
    <Container className="mt-5 pt-5 skills-section">
      <div className="skills-pic">
        <img src={skills} alt="skills logo" />
      </div>

      <div className="dots3">
        <img src={dots3} alt="dots shape" />
      </div>

      <div className="dots4">
        <img src={dots4} alt="dots shape" />
      </div>

      <div className="dots5">
        <img src={dots5} alt="dots shape" />
      </div>

      <div className="ellipse3">
        <img src={ellipse3} alt="ellipse shape" />
      </div>

      <div className="ellipse4">
        <img src={ellipse4} alt="ellipse shape" />
      </div>

      <hr className="skills-hr mx-auto" style={{ width: "90%" }} />

      <Row>
        {data.map((skill, index) => (
          <React.Fragment key={index}>
            <Col
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className="mb-5 pb-3 d-flex flex-column align-items-center box"
            >
              <PieChart data={{ percentage: skill.percentage }} size={150} />
              <span className="mt-3">{skill.skillName}</span>
              <span className="percentage">{skill.percentage}%</span>
            </Col>
            {index === 3 && (
              <Col key={`hr-lg-${index}`} lg={12} className="d-none d-lg-block">
                <hr className="skills-hr mx-auto" style={{ width: "90%" }} />
              </Col>
            )}
            {index % 2 === 1 && index < data.length - 2 && (
              <Col key={`hr-md-${index}`} md={12} className="d-lg-none">
                <hr className="skills-hr mx-auto" style={{ width: "90%" }} />
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
}

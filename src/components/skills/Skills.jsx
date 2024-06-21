import { Container, Row, Col } from "react-bootstrap";
import "./skills.css";

import skills from "../../assets/Skills.png";
import PieChart from "./PieChart";
import data from "./chartData";

export default function Skills() {
  return (
    <Container className="mt-5 pt-5 skills-section">
      <div className="skills-pic">
        <img src={skills} alt="skills logo" />
      </div>
      <Row>
        {data.map((skill, index) => (
          <Col
            key={index}
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
        ))}
      </Row>
    </Container>
  );
}

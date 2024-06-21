import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import "./home.css";

import homePic from "../../assets/homePic.png";
import palette from "../../assets/palette.png";
import arror1 from "../../assets/arrow-circlepng.png";
import arrow2 from "../../assets/Arrow.png";

export default function Home() {
  return (
    <Container className="home">
      <Row>
        <Col lg={4}>
          <Stack direction="vertical" gap={4} className="box">
            <Stack direction="horizontal" className="info">
              <h1 className="name">
                Hi, I am <br /> Hassan
              </h1>

              <div className="palette-img">
                <img src={palette} alt="palette-image" />
              </div>
            </Stack>

            <p>
              I am a UI/UX Designer, I like to make interfaces simple and
              aesthetically pleasing for users; The idea is not to create an
              interface for creating it, it is that users prefer you because
              your product is easy to use.
            </p>

            <Stack direction="horizontal" style={{ marginTop: "-3.5rem" }}>
              <Button
                variant="none"
                className="btn-home d-flex justify-content-center align-items-center gap-2"
              >
                Contact Me!
                <div style={{ width: "20px", height: "20px" }}>
                  <img
                    style={{ width: "100%", marginTop: "-5px" }}
                    src={arror1}
                    alt="arrow-icon"
                  />
                </div>
              </Button>

              <div className="arrow2">
                <img src={arrow2} alt="arrow-pic" />
              </div>
            </Stack>
          </Stack>
        </Col>
        <Col lg={8} className="right-section">
          <div style={{ width: "100%" }}>
            <img
              style={{ width: "92%", marginLeft: "6rem" }}
              src={homePic}
              alt="landing pic"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

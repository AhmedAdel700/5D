import "./header.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/logo.webp";
import shape from "../../assets/Ellipse 34.png";
import ellipse from "../../assets/Ellipse 38.png";
import dots from "../../assets/dots.png";

export default function Header() {
  const menuData = [
    {
      path: "/",
      name: "Home",
      class: "home-link",
    },
    {
      path: "/skills",
      name: "Skills",
      class: "skills-link",
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      class: "portfolio-link",
    },
    {
      path: "/blog",
      name: "Blog",
      class: "blog-link",
    },
  ];

  return (
    <Navbar expand="lg" className="d-flex justify-content-between header">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
          <div className="profile-pic">
            <img src={logo} alt="profile-pic" />
          </div>
          <span style={{ fontSize: "0.9rem" }}>Hassan Abu Ali</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            {menuData.map((item) => {
              return (
                <Nav.Link
                  className={item.class}
                  key={item.path}
                  href={item.path}
                >
                  {item.name}
                </Nav.Link>
              );
            })}

            <Nav.Link href="#">
              <Button
                className="btn-header-collapse"
                variant="none"
                style={{ backgroundColor: "#7579FF", color: "#FFFFFF" }}
              >
                Contact Me
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          className="btn-header"
          variant="none"
          style={{ backgroundColor: "#7579FF", color: "#FFFFFF" }}
        >
          Contact Me
        </Button>
        <div className="ellipse">
          <img src={shape} alt="ellipse shape" />
        </div>
        <div className="ellipse2">
          <img src={ellipse} alt="ellipse shape" />
        </div>
        <div className="dots">
          <img src={dots} alt="dots shape" />
        </div>
      </Container>
    </Navbar>
  );
}

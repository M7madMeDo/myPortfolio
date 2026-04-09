import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-4">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Mohamed Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <div className="d-flex justify-content-center mt-2 mt-lg-0 ms-lg-3">
              <Nav.Link
                href="https://github.com/M7madMeDo"
                target="_blank"
                className="px-2"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/mohamed-a-abdelhamied-6925803a2/"
                target="_blank"
                className="px-2"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCode } from "@fortawesome/free-solid-svg-icons";
export default function Herosection() {
  return (
    <section
      id="home"
      className="bg-light py-5 min-vh-100 d-flex align-items-center"
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={7} className="mb-4 mb-md-0">
            <h1 className="display-3 fw-bold text-dark mb-3">
              Hi, I'm Mohamed
            </h1>
            <h2 className="h3 text-primary mb-4">Front-End Developer</h2>
            <p className="lead text-secondary mb-5">
              I specialize in building responsive, interactive, and
              user-friendly web applications using modern JavaScript frameworks.
            </p>
            <div>
              <Button
                variant="primary"
                size="lg"
                className="me-3 mb-2"
                href="#projects"
              >
                <FontAwesomeIcon icon={faCode} className="me-2" />
                View Projects
              </Button>
              <Button
                variant="outline-dark"
                size="lg"
                className="mb-2"
                href="/cv.pdf"
                target="_blank"
              >
                <FontAwesomeIcon icon={faDownload} className="me-2" />
                Download CV
              </Button>
            </div>
          </Col>
          <Col md={5} className="text-center">
            <img
              src="/public/assets/pics/Programming-amico.webp"
              alt="Profolio-IMG"
              className="img-thumbnail rounded-circle  "
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="bg-dark text-light py-5 mt-auto border-top border-secondary"
    >
      <Container>
        <Row className="align-items-center flex-column flex-md-row text-center text-md-start g-4">
          <Col md={4}>
            <h4 className="fw-bold mb-2">
              Mohamed<span className="text-primary">.</span>
            </h4>
            <p className="text-secondary mb-0 small">
              Built with React & Bootstrap
              <FontAwesomeIcon icon={faHeart} className="text-danger ms-1" />
            </p>
          </Col>

          <Col md={4} className="text-center">
            <p className="mb-0 text-secondary">
              &copy; {currentYear} Mohamed Portfolio. All Rights Reserved.
            </p>
          </Col>

          <Col md={4} className="text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://github.com/M7madMeDo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-a-abdelhamied-6925803a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

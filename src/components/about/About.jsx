import { Container, Row, Col } from "react-bootstrap";
export default function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mb-4 mb-lg-0 text-center">
            <img
              src="/assets/pics/Figma.webp"
              alt="Working on code"
              className="img-fluid rounded-circle shadow-lg"
            />
          </Col>
          <Col lg={7} className="px-lg-5">
            <h2 className="fw-bold mb-4 text-dark">About Me</h2>
            <p className="lead text-secondary mb-4">
              Front-End Developer passionate about building modern, responsive,
              and user-friendly websites.
            </p>
            <p className="text-secondary mb-4">
              My journey in web development stems from a desire to solve complex
              problems through code. I enjoy working with HTML, CSS, JavaScript,
              and React to build responsive interfaces that look great on any
              device. I am constantly learning and exploring new technologies,
              from CSS frameworks like Bootstrap to connecting front-end
              interfaces with external APIs.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

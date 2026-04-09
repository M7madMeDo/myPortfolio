import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
export default function Error() {
  return (
    <section className="bg-dark text-light vh-100 d-flex align-items-center border-top border-secondary">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <div className="mb-4">
              <img
                src="/public/assets/pics/Error404.webp"
                alt="404 Error"
                className="img-fluid rounded-4 shadow-lg mb-3"
              />
            </div>

            <h1
              className="display-1 fw-bold mb-0"
              style={{ fontSize: "6rem", lineHeight: "1" }}
            >
              4<span className="text-primary">0</span>4
            </h1>

            <h2 className="h2 fw-bold mb-3 text-light">
              Oops! Page Not Found.
            </h2>

            <p className="lead text-secondary mb-5">
              The page you are looking for doesn't exist. It might have been
              moved, deleted, or perhaps you mistyped the URL.
            </p>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Button
                variant="primary"
                size="lg"
                href="/"
                className="px-5 py-3 fw-bold d-flex align-items-center justify-content-center"
              >
                <FontAwesomeIcon icon={faHome} className="me-2" />
                Back to Homepage
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

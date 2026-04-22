import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faGithub,
  faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "HTML5", icon: faHtml5, color: "#E34F26" },
  { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "React", icon: faReact, color: "#61DAFB" },
  { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
  { name: "Tailwind", icon: faTailwindCss, color: "#06B6D4" },
  { name: "GitHub", icon: faGithub, color: "#181717" },
];
export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5 text-dark">My Skills</h2>
        <Row className="g-4 justify-content-center">
          {skills.map((skill, i) => (
            <Col xs={6} md={4} lg={2} key={i}>
              <Card className="text-center h-100 shadow-sm border-1 py-4 custom-hover">
                <Card.Body>
                  <FontAwesomeIcon
                    icon={skill.icon}
                    size="4x"
                    style={{ color: skill.color }}
                    className="mb-3"
                  />
                  <Card.Title className="fs-5">{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

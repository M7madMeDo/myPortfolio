import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: "ToDo List",
      description:
        "A simple and intuitive task management application that allows users to add, edit, delete, and organize daily tasks efficiently. It features local storage to ensure data persistence and a clean, user-friendly interface.",
      image: "/assets/pics/todolist.webp",
      liveLink: "https://todolist-medo.netlify.app/",
      repoLink: "https://github.com/M7madMeDo/TodoList.git",
    },
    {
      id: 2,
      title: "Bookmarker",
      description:
        "A web application designed to save and manage favorite website links. Users can easily add, visit, and delete bookmarks, with data stored locally for quick and reliable access.",
      image: "/assets/pics/book.webp",
      liveLink: "https://bookmark-medo.netlify.app/",
      repoLink: "https://github.com/M7madMeDo/bookmarker.git",
    },
    {
      id: 3,
      title: "React Portfolio",
      description:
        "A modern and responsive personal portfolio built with React. It showcases projects, skills, and contact information through reusable components and a clean, professional design.",
      image: "/assets/pics/protfail.png",
      liveLink: "m7mad-portfolio.netlify.app",
      repoLink: "https://github.com/M7madMeDo/myPortfolio.git",
    },
    {
      id: 4,
      title: "Crypto Money Tracker",
      description:
        "A responsive React application that displays cryptocurrency market data using the CoinGecko API. The app features a clean UI, dynamic data fetching, and smooth pagination for an enhanced user experience.",
      image: "/assets/pics/Cypto projeect.png",
      liveLink: "",
      repoLink: "https://github.com/M7madMeDo/crypto-money-tracker",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-5 text-dark">
          Featured Projects
        </h2>
        <Row className="g-4   justify-content-start">
          {projectList.map((project) => (
            <Col
              md={6}
              lg={4}
              key={project.id}
              className="d-flex align-items-center "
            >
              <Card className="w-100 shadow-sm border-0 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold fs-5 mb-3">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="text-secondary mb-4 flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between mt-auto">
                    <Button
                      variant="primary"
                      href={project.liveLink || "#"}
                      target="_blank"
                      className="d-flex align-items-center"
                    >
                      <FontAwesomeIcon icon={faCode} className="me-2" />
                      {project.liveLink ? "Live Demo" : "No Demo yet"}
                    </Button>
                    <Button
                      variant="outline-dark"
                      href={project.repoLink}
                      target="_blank"
                      className="d-flex align-items-center"
                    >
                      <FontAwesomeIcon icon={faGithub} className="me-2" />{" "}
                      Source
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

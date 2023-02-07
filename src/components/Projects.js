import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Clone",
      description:
        "Online shopping site where users can buy things. I work on the frontend side using ReactJs and ReactBootstrap.",
      imgUrl: projImg1,
    },
    {
      title: "Immersive Dashboard",
      description:
        "A website for class instructors to manage data about their students. I work on the frontend side using NextJs and React-Bootstrap.",
      imgUrl: projImg2,
    },
    {
      title: "Rozhok App",
      description:
        "Rozhok is a platform with a goal to help people that wish to rid their recycle-worthy junk items connected with recycling businesses that are willing to buy them. I work on the frontend side using NextJs and React-Bootstrap.",
      imgUrl: projImg3,
    },
    {
      title: "Rozhok App",
      description:
        "In addition, I also make API for flow “client sell junk items” as it is one of the main flow of user “Client”. I use ExpressJs to make the API and Sequelize for connection to the database. Overall, it needs 6 endpoint with mostly CRUD operation and 1 integration with 3rd-party (Google distancematrix).",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Fugiat exercitation tempor dolor enim nulla sunt et adipisicing
              officia consequat in duis quis nulla. Tempor qui in exercitation
              est. Lorem ea ad minim sint Lorem occaecat irure excepteur.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Adipisicing laboris deserunt quis fugiat eiusmod est
                  consectetur. Nostrud reprehenderit duis occaecat duis est
                  tempor enim laboris officia commodo nostrud deserunt nulla
                  duis. Consequat ut quis Lorem ullamco ipsum velit. Voluptate
                  Lorem eiusmod ad eu id in sint ipsum. Magna adipisicing aliqua
                  non consequat incididunt aute ad mollit ea non.
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Consectetur minim tempor cillum nostrud elit nostrud quis
                  consequat eiusmod velit nostrud consectetur do. Veniam minim
                  sint anim est Lorem occaecat officia eu id. Anim duis
                  voluptate ea in excepteur tempor consequat eu in nostrud
                  adipisicing velit do. Est minim non eu sit consectetur culpa
                  esse. Esse mollit veniam commodo ipsum dolore ipsum et aliqua
                  velit. Deserunt aute proident culpa nisi.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};

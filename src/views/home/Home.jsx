import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "simplebar/dist/simplebar.min.css";

import ScrollList from "../components/scoll-list/ScrollList";
import Title from "../components/Title";
import Timeline from "./Timeline";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <Container fluid style={{ padding: 15 }}>
      <Row>
        <Col>
          {/* Title */}
          <Title title="Adam Young">
            <h2>Full-stack Software Developer</h2>
            <h4>Birmingham, UK</h4>
            <h5>
              <a href="https://onedrive.live.com/embed?cid=CFB23384E8E2C11A&resid=CFB23384E8E2C11A%2123708&authkey=AFG2xl_rZCPK3rM&em=2">
                {"View CV"}
              </a>
            </h5>
          </Title>

          <ScrollList title="About">
            {/* Timeline */}
            <ScrollList.Entry title="Timeline">
              <ScrollList.Section>
                <Timeline />
              </ScrollList.Section>
            </ScrollList.Entry>

            {/* Skills */}
            <ScrollList.Entry title="Skills">
              <ScrollList.Section>
                <Skills />
              </ScrollList.Section>
            </ScrollList.Entry>

            {/* Projects */}
            <ScrollList.Entry title="Projects">
              <ScrollList.Section>
                <Projects />
              </ScrollList.Section>
            </ScrollList.Entry>
          </ScrollList>

          <Row>
            <Col>
              <strong>
                <h1 style={{ marginBottom: 36, textAlign: "center" }}>Contact</h1>
              </strong>
              <Contact />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

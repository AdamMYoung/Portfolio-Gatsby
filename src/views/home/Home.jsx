import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import "simplebar/dist/simplebar.min.css";

import ScrollList from "../components/scoll-list/ScrollList";
import Title from "./Title";
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
          <Title />

          <ScrollList title="About">
            {/* Timeline */}
            <ScrollList.Item title="Timeline">
              <Timeline />
            </ScrollList.Item>

            {/* Skills */}
            <ScrollList.Item title="Skills">
              <Skills />
            </ScrollList.Item>

            {/* Projects */}
            <ScrollList.Item title="Projects">
              <Projects />
            </ScrollList.Item>
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

Home.propTypes = {
  color: PropTypes.string
};

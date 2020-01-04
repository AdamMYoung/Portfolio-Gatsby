import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "simplebar/dist/simplebar.min.css";

import ScrollList from "../components/scoll-list/ScrollList";
import Title from "../components/Title";

const Snippets = () => {
  return (
    <Container fluid style={{ padding: 15 }}>
      <Row>
        <Col>
          {/* Title */}
          <Title title="Snippets">
            <Row>
              <Col cs={12} sm={8} md={6} lg={4}>
                <h4>
                  Below you'll find a collection of code snippets that I've either created or came across that I've found useful.
                </h4>
                <h5>Feel free to use them if they help!</h5>
              </Col>
            </Row>
          </Title>

          <ScrollList>
            <ScrollList.Entry title="HTML">
              <ScrollList.Section title="Layouts"></ScrollList.Section>
            </ScrollList.Entry>
            <ScrollList.Entry title="CSS">
              <ScrollList.Section title="Transitions"></ScrollList.Section>
            </ScrollList.Entry>
            <ScrollList.Entry title="JavaScript">
              <ScrollList.Section title="React - Components"></ScrollList.Section>
              <ScrollList.Section title="React - Hooks"></ScrollList.Section>
              <ScrollList.Section title="React - Patterns"></ScrollList.Section>
              <ScrollList.Section title="React - Redux"></ScrollList.Section>
              <ScrollList.Section title="React - React Router"></ScrollList.Section>
              <ScrollList.Section title="Utiliy Functions"></ScrollList.Section>
            </ScrollList.Entry>
            <ScrollList.Entry title="C#">
              <ScrollList.Section title=".NET Core - Patterns"></ScrollList.Section>
              <ScrollList.Section title=".NET Core - Middleware"></ScrollList.Section>
              <ScrollList.Section title=".NET Core - Utility"></ScrollList.Section>
              <ScrollList.Section title="Utiliy Functions"></ScrollList.Section>
            </ScrollList.Entry>
          </ScrollList>
        </Col>
      </Row>
    </Container>
  );
};

export default Snippets;

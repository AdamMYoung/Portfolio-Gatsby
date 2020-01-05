import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "simplebar/dist/simplebar.min.css";

import ScrollList from "../components/scoll-list/ScrollList";
import Title from "../components/Title";
import Layouts from "./html/Layouts";
import Transitions from "./css/Transitions";
import ReactComponents from "./javascript/ReactComponents";
import ReactHooks from "./javascript/ReactHooks";
import ReactPatterns from "./javascript/ReactPatterns";
import ReactRedux from "./javascript/ReactRedux";
import ReactRouter from "./javascript/ReactRouter";
import JavaScriptUtilsString from "./javascript/JavaScriptUtilsString";
import JavaScriptUtilsArray from "./javascript/JavaScriptUtilsArray";
import NetCorePatterns from "./c-sharp/NetCoreMiddleware";
import NetCoreUtility from "./c-sharp/NetCoreUtility";
import NetCoreMiddleware from "./c-sharp/NetCoreMiddleware";
import CSharpUtilsArray from "./c-sharp/CSharpUtilsArray";
import CSharpUtilsMath from "./c-sharp/CSharpUtilsMath";
import CSharpUtilsString from "./c-sharp/CSharpUtilsString";
import JavaScriptUtilsMath from "./javascript/JavaScriptUtilsMath";

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
              <ScrollList.Section title="Layouts">
                <Layouts />
              </ScrollList.Section>
            </ScrollList.Entry>
            <ScrollList.Entry title="CSS">
              <ScrollList.Section title="Transitions">
                <Transitions />
              </ScrollList.Section>
            </ScrollList.Entry>
            <ScrollList.Entry title="JavaScript">
              <ScrollList.Section title="React - Components">
                <ReactComponents />
              </ScrollList.Section>
              <ScrollList.Section title="React - Hooks">
                <ReactHooks />
              </ScrollList.Section>
              <ScrollList.Section title="React - Patterns">
                <ReactPatterns />
              </ScrollList.Section>
              <ScrollList.Section title="React - Redux">
                <ReactRedux />
              </ScrollList.Section>
              <ScrollList.Section title="React - React Router">
                <ReactRouter />
              </ScrollList.Section>
              <ScrollList.Section title="Utiliy - Array">
                <JavaScriptUtilsArray />
              </ScrollList.Section>
              <ScrollList.Section title="Utiliy - Math">
                <JavaScriptUtilsMath />
              </ScrollList.Section>
              <ScrollList.Section title="Utiliy - String">
                <JavaScriptUtilsString />
              </ScrollList.Section>
            </ScrollList.Entry>
            <ScrollList.Entry title="C#">
              <ScrollList.Section title=".NET Core - Patterns">
                <NetCorePatterns />
              </ScrollList.Section>
              <ScrollList.Section title=".NET Core - Middleware">
                <NetCoreMiddleware />
              </ScrollList.Section>
              <ScrollList.Section title=".NET Core - Utility">
                <NetCoreUtility />
              </ScrollList.Section>
              <ScrollList.Section title="Utility - Array">
                <CSharpUtilsArray />
              </ScrollList.Section>
              <ScrollList.Section title="Utility - Math">
                <CSharpUtilsMath />
              </ScrollList.Section>
              <ScrollList.Section title="Utility - String">
                <CSharpUtilsString />
              </ScrollList.Section>
            </ScrollList.Entry>
          </ScrollList>
        </Col>
      </Row>
    </Container>
  );
};

export default Snippets;

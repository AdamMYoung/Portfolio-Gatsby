import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import ScrollEvent from "../scroll-event/ScrollEvent";

export const ScrollListSection = props => {
  return (
    <div id={props.name} style={{ marginTop: 24, marginBotom: 24 }}>
      <Container>
        <Row>
          <Col>
            <ScrollEvent onEnter={props.onSectionEntered}>
              <div>
                <h3>{props.title}</h3>
              </div>
            </ScrollEvent>
          </Col>
        </Row>
        <Row>
          <Col>{props.children}</Col>
        </Row>
      </Container>
    </div>
  );
};

ScrollListSection.defaultProps = {
  displayInList: true
};

ScrollListSection.propTypes = {
  // Title to display in the list.
  title: PropTypes.string,

  //Indicates if the section should be displayed in the side list. Defaults to true.
  displayInList: PropTypes.bool
};
